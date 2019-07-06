import React from 'react';

const Product = ({name, image, price}) => {
    return (
        <div className='Product'>
            <div className='Product-image'>
                <img src={image} alt={name} />
            </div>
            <h2 className='Product-title'>{name}</h2>
            <span className='Product-price'>{price} &euro;</span>
        </div>
    );
};

export default Product;