import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Header = () => {
    return (
        <div className='Header'>
            <span className='Header-logo'>I'm selling stuff</span>
            <span className='Header-shoppingCart'><FontAwesomeIcon icon={faShoppingCart} size='lg' /></span>
        </div>
    );
};

export default Header;