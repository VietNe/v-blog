import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className=" shadow bg-gray-100  flex-1 ml-6 rounded overflow-hidden hidden md:flex">
      <input
        className="w-full rounded p-2 bg-gray-100 text-black focus-visible:outline-none"
        type="text"
        placeholder="Search something..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-blue-400 hover:bg-blue-300  text-white p-2 pl-4 pr-4">
        <p className="font-semibold text-xs">Search</p>
      </button>
    </div>
  );
};

export default Search;
