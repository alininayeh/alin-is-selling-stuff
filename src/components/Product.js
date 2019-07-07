import React from 'react';
import {Link} from 'react-router-dom';

const onImageLoad = (e) => {
    e.currentTarget.parentNode.classList.add('loaded');
};

const Product = ({name, image, price, id}) => {
    return (
        <Link to={`/product/${id}/${encodeURIComponent(name)}/`} className='Product'>
            <div className='Product-image'>
                <img src={image} alt={name} onLoad={onImageLoad} />
            </div>
            <h2 className='Product-title'>{name}</h2>
            <span className='Product-price'>{price} &euro;</span>
        </Link>
    );
};

export default Product;