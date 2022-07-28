import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';       
import { Link } from 'react-router-dom';
import {SidebarData} from './SidebarData';
import './Navbar.css';
import Logo from './Images/logo.jpg';
import SearchBox from './SearchBox';

const Nav = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

  return (
      <div>
      <nav className='navbar'>
      <Link to='#' className='menu'>
       <GiHamburgerMenu className='menu' onClick={showSidebar}/>
      </Link>
      <div className={sidebar ? 'nav-menu active' : 'nav-menu' }>
          <ul className='nav-menu-items' onClick={showSidebar}>
              <li className='navbar-toggle'>
      <Link to='#' className='menu-bars'>
      <AiOutlineClose className='close-text' />
      </Link>
      </li>
      <img src={Logo} alt='logo' height={200} width={200} />
      {SidebarData.map((item, index) => {
          return(
              <li key={index} className={item.className}>
              <Link to={item.path}>
              {item.icon}
              <span>{item.tittle}</span>
              </Link>
              </li>
          );
      })}
          </ul>            
      </div>
        <h2>DOMINICAN HYMNS</h2>
        <SearchBox />
      </nav>
      </div>

    );    
}


export default Nav;       
