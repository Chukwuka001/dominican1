import React from 'react';
import { FaHome } from 'react-icons/fa';
import { CgMenuGridR } from 'react-icons/cg';
import { MdContactMail } from 'react-icons/md';
import { FcAbout } from 'react-icons/fc';

export const SidebarData = [
   {
        tittle: 'Home',
        path: '/',
        icon: <FaHome />,
        className: 'nav-text'
    },
    {
        tittle: 'Index',
        path: '/',
        icon: <CgMenuGridR />,
        className: 'nav-text'
    },
    {
        tittle: 'Contact Us',
        path: '/',
        icon: <MdContactMail />,
        className: 'nav-text'
    },                         
    {
        tittle: 'About Us',
        path: '/',
        icon: <FcAbout />,
        className: 'nav-text'
    }
]
