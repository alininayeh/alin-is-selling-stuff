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
                            <span className='ProductDetails-price'>{product.price} &euro;</span>
                            <p dangerouslySetInnerHTML={{__html: product.description.replace(/\n/g, '<br />')}} />
                            <p className='ProductDetails-get'>In order to get this just send me an email to <a href='mailto:alinoch7@gmail.com'>alinoch7@gmail.com</a> or find me on Slack (<strong>Alin Inayeh</strong>).</p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductDetails;