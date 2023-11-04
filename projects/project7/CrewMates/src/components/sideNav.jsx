import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const SideNav = () => {


    return (
        <div className="sidenav">
          <div className='menu'>
              <ul>
                  <li className='menu-header'>
                      <nav>
                          <Link to="/"> Home </Link>
                      </nav>
                          
                  </li>
      
                  <li className='menu-item'>
                    <nav>
                      <Link to= "/create"> Create crew mate </Link>
                    </nav>
                  </li>  
      
                  <li className='menu-item'>
                      
                  </li>      
              </ul>     
          </div>
              <Outlet />
        </div>
      )}

export default SideNav;