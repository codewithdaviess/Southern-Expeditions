import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    alert(`Searching for: ${query}`); 
    // later connect to Supabase filter
  };

  return (
    <div className="flex justify-center -mt-8 mb-12">
      <div className="bg-white shadow-lg rounded-full flex items-center w-3/4 md:w-1/2 p-2">
        <input
          type="text"
          placeholder="Search destinations or activities..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-4 py-2 rounded-l-full outline-none"
        />
        <button
          onClick={handleSearch}
          className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    </div>
  );
}
