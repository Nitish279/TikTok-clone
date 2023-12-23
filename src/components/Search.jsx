import React, { useState, useCallback, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { useDebounce } from "use-debounce";

import users from "../data/users.json";

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Destructure the debounced value from the array
  const [debouncedSearchTerm] = useDebounce(searchQuery, 500);

  const handleSearchName = useCallback(({ target: { value } }) => {
    setSearchQuery(value.toLowerCase());
  }, []);

  useEffect(() => {
    if (!debouncedSearchTerm) {
      // If no search query, do not display users
      setSearchResults([]);
      return;
    }

    const filteredUsers = users.filter((user) =>
      user.name.toLowerCase().includes(debouncedSearchTerm)
    );

    setSearchResults(filteredUsers);
  }, [debouncedSearchTerm, handleSearchName]);

  const mappedSearchResults = useMemo(
    () =>
      searchResults.map((profile) => (
        <Link
          key={profile.id}
          to={`/profile/${profile.id}`}
          className="flex items-center justify-between w-full cursor-pointer hover:bg-[#F12B56] p-1 px-2 hover:text-white"
        >
          <div className="flex items-center">
            <img
              className="rounded-md"
              width="40"
              src={profile.image}
              alt="User Profile"
              loading="lazy"
            />
            <div className="truncate ml-2">{profile.name}</div>
          </div>
        </Link>
      )),
    [searchResults]
  );

  return (
    <>
      <div className="relative hidden md:flex items-center justify-end bg-gray-100 p-1 rounded-full max-w-[430px] w-full">
        <input
          id="searchUsers"
          type="text"
          value={searchQuery}
          onChange={handleSearchName}
          className="w-full pl-3 my-2 bg-transparent placeholder-[#838383] text-[15px] focus:outline-none"
          placeholder="Search accounts"
        />

        {searchResults.length > 0 && (
          <div className="absolute bg-white max-w-[910px] h-auto w-full z-20 left-0 top-12 border p-1">
            <div className="p-1">{mappedSearchResults}</div>
          </div>
        )}

        <div className="px-3 py-1 flex items-center border-l border-l-gray-300">
          <BiSearch color="#A1A2A7" size="22" />
        </div>
      </div>
    </>
  );
};

export default Search;
