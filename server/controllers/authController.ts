import { Request, Response } from 'express';
import Users from '../models/userModel';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import { generateActiveToken } from '../config/generateToken'

import sendMail from '../config/sendMail';
import { validPhone, validateEmail } from '../middleware/valid'
import { sendSMS } from '../config/sendSMS'
import { IDecodedToken } from './../config/interfaces';

const CLIENT_URL = `${process.env.BASE_URL}`;
const authController = {
    register: async (req: Request, res: Response) => {
        try {
            const { name, account, password } = req.body;

            const user = await Users.findOne({ account })

            // Check user exists
            if (user) return res.status(400).json({ msg: 'Email or Phone number already exists' });

            // Create new user
            const passwordHash = bcrypt.hashSync(password, 12);
            const newUser = {
                name, account, password: passwordHash
            }

            const active_token = generateActiveToken({ newUser });
            const url = `${CLIENT_URL}/active/${active_token}`;
            if (validateEmail(account)) {
                sendMail(account, url, 'Verify your email address.');
                return res.json({
                    msg: 'Success! Please check your email.',
                    // token: active_token 
                })
            }
            else if (validPhone(account)) {
                sendSMS(account, url, 'Verify your phone number')
                return res.json({ msg: 'Success! Please check your phone.' })
            }

        } catch (err: any) {
            return res.status(500).json({ msg: err.message })
        }
    },
    activeAccount: async (req: Request, res: Response) => {
        try {
            const { active_token } = req.body;
            const decoded = <IDecodedToken>jwt.verify(active_token, `${process.env.ACTIVE_TOKEN_SECRET}`)
            const { newUser } = decoded;

            if (!newUser) return res.status(400).json({ msg: "Ivalid authentication." })

            const user = new Users(newUser);

            await user.save();
            res.json({ msg: "Account has been activated" })

        } catch (err: any) {
            let errMsg;

            if (err.code === 11000) {
                errMsg = Object.keys(err.keyValue)[0] + " already exists."
            } else {
                let name = Object.keys(err.errors)[0]
                errMsg = err.errors[`${name}`].message
            }

            return res.status(500).json({ msg: errMsg })
        }
    }
}

export default authController