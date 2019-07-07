import React from 'react';
import Product from './Product';
import Loader from './Loader';

const Products = ({products}) => {
    return (
        <div className='Products'>
            {
                !products.length ?
                <Loader /> :
                products.map((item, i) => <Product key={i} image={item.image} name={item.name} price={item.price} id={item._id} />)
            }
        </div>
    );
};

export default Products;