import React, { useState } from 'react';
import './Navbar.css';
import { BsSearch } from 'react-icons/bs';
import './SearchBox.css';

const SearchBox = ({searchfield, searchChange}) => {
    const [search, setSearch] = useState(false);
    const showSearch = () => setSearch(!search);
    
    return(
        <div className='container'>
        <input type='search' placeholder='Search Hymes' className={search ? 'search-input active' : 'search-input' } onChange={searchChange}/>
         <BsSearch className='search' onClick={showSearch}/>
        </div>
                
    );
}

export default SearchBox;
