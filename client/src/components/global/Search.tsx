import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="bg-white shadow flex-1 ml-6 rounded overflow-hidden hidden md:flex">
      <input
        className="w-full rounded p-2"
        type="text"
        placeholder="Search something..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button className="bg-red-400 hover:bg-red-300  text-white p-2 pl-4 pr-4">
        <p className="font-semibold text-xs">Search</p>
      </button>
    </div>
  );
};

export default Search;
