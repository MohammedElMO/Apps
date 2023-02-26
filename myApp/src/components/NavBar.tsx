// @flow 
import * as React from 'react';

import { Link } from 'react-router-dom';
type Props = {
    
};
export const NavBar = (props: Props) => {
    return (
        <header className= ' z-30 bg-purple-900 w-full p-3 fixed top-0 font-Poppin'>
            <ul className=' font-bold text-back flex gap-3'>
            <li className='p-2 bg-gray-300 rounded-sm'>
              <Link to="/Register">Rigestration</Link >
            </li>
            <li className='p-2 bg-gray-300 rounded-sm'>
              <Link to="/Welcome">Home</Link >
            </li>
          </ul>
        </header>
    );
};