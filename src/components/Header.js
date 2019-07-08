import React from 'react';
import {Link} from 'react-router-dom';


const Header = () => {
    return (
        <div className='Header'>
            <Link to='/' className='Header-logo'>I'm selling stuff</Link>
        </div>
    );
};

export default Header;