import React from 'react';
import { FaSearch } from 'react-icons/fa';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="relative w-full max-w-screen-xl mx-auto">
      <input
        type="text"
        placeholder="Search for a cryptocurrency..."
        className="p-3 pr-10 border rounded-full w-full text-lg focus:outline-none focus:ring-2 focus:ring-primary"
        onChange={(e) => onSearch(e.target.value)}
      />
      <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </div>
  );
};

export default SearchBar;