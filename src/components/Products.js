import React from 'react';
import {connect} from 'react-redux';
import Product from './Product';

const getProductsAction = () => {
    return async dispatch => {
        const response = await fetch('https://alin-is-selling-stuff-server.herokuapp.com/api/products');
        const products = await response.json();

        dispatch({
            type: 'PRODUCTS_GET',
            payload: products
        });
    };
};

class Products extends React.Component {
    componentDidMount() {
        this.props.getProducts();
    }

    render() {
        const products = this.props.products;
        return (
            <div className='Products'>
                {products.map((item, i) => <Product key={i} image={item.image} name={item.name} price={item.price} />)}
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProductsAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);