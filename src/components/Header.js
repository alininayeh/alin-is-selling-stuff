import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div className='Header'>
            <Link to='/' className='Header-logo'>I'm selling stuff</Link>
            <span className='Header-shoppingCart'><FontAwesomeIcon icon={faShoppingCart} size='lg' /></span>
        </div>
    );
};

export default Header;