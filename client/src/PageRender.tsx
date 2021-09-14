import NotFound from "@components/global/NotFound";
import { IParams } from "@utils/types";
import React from "react";
import { useParams } from "react-router-dom";

const PageRender = () => {
  const { page, slug }: IParams = useParams();

  const generatePage = (name: string) => {
    const component = () => require(`@pages/${name}`).default;
    try {
      return React.createElement(component());
    } catch (error) {
      return <NotFound />;
    }
  };
  let name = "";
  if (page) {
    name = slug ? `${page}/[slug]` : `${page}`;
  }
  return generatePage(name);
};

export default PageRender;
