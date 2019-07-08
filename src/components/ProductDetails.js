import React from 'react';
import {Link} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTimes} from '@fortawesome/free-solid-svg-icons';

const ProductDetails = ({products, match}) => {
    const product = products.filter(item => item._id === match.params.id)[0];
    window.scrollTo(0, 0);
    
    return (
        <div className='ProductDetails'>
            {
                !!product &&
                <div className='ProductDetails-placeholder'>
                    <div className='ProductDetails-product'>
                        <Link to='/' className='ProductDetails-close'><FontAwesomeIcon icon={faTimes} size='lg' /></Link>
                        <div className='ProductDetails-image'>
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className='ProductDetails-productInfo'>
                            <h1 className='ProductDetails-title'>{product.name}</h1>
                            <p dangerouslySetInnerHTML={{__html: product.description.replace(/\n/g, '<br />')}} />
                            <button className='ProductDetails-button'>Get it for {product.price} &euro;</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductDetails;