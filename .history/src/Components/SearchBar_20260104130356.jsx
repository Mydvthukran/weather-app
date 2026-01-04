import { Search } from 'lucide-react'
import React from 'react'

const SearchBar = () => {
  return (
    <div className="search-bar">
      
      
      <input className='s' type="text" placeholder="Search..." />
      <Search size={20} strokeWidth={1} />
    </div>
  )
}

export default SearchBar
