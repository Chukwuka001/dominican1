import React from 'react';
import {Link, Outlet} from 'react-router-dom';
            

export const Content = ({tittle, id}) => {
    return(
        <div className='content-e'>
        <Link to={`/${id}`}>
        <div className='content' key={id}>
        <h3>HYMN  {id}</h3>
        <h3>{tittle}</h3>
        </div>
        </Link>
        <Outlet />
        </div>
    );
}

export default Content;
