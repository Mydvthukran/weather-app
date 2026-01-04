import { Search } from "lucide-react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSearch = () => {
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <div className="search-bar">
      <input
        className="search"
        type="text"
        placeholder="Search a city...."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") handleSearch();
        }}
      />

      
      <button className="search-btn" onClick={handleSearch}>
        <Search size={20} strokeWidth={1} />
      </button>
    </div>
  );
};

export default SearchBar;
