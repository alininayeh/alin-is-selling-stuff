import React from 'react';
import Loader from './Loader';

const ProductDetails = ({products, match}) => {
    const product = products.filter(item => item._id === match.params.id)[0];
    
    return (
        <div className='ProductDetails'>
            {
                !product ?
                <Loader /> :
                <div className='ProductDetails-product'>
                    <div className='ProductDetails-image'>
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div className='ProductDetails-productInfo'>
                        <h1 className='ProductDetails-title'>{product.name}</h1>
                        <span className='ProductDetails-price'>{product.price} &euro;</span>
                        <p dangerouslySetInnerHTML={{__html: product.description.replace(/\n/g, '<br />')}} />
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductDetails;