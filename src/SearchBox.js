import React, { useState } from 'react';
import './Navbar.css';
import { BsSearch } from 'react-icons/bs';
import './SearchBox.css';
import hymns from './hymns';

const SearchBox = ({hymns}) => {

    const [search, setSearch] = useState(false);
    const showSearch = () => setSearch(!search);

    
    const [hymn, setHymn] = useState(hymns);
    const filteredNames = (e) => {
        const searchFi = e.target.value.toLowerCase();
        const filteredNames = hymns.filter(hymn => hymn.tittle.toLowerCase().includes(searchFi))
        setHymn(filteredNames)
        console.log(searchFi);
            
    }

    
    return(
        <div className='container'>        
        <input type='search' placeholder='Search Hymes' className={search ? 'search-input active' : 'search-input'} onChange={(e) => filteredNames(e)} />                   
        <BsSearch className='search' onClick={showSearch}/>
        </div>
                
    );
}

export default SearchBox;
