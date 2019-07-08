import React from 'react';
import {HashRouter as Router, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './Header';
import Products from './Products';
import ProductDetails from './ProductDetails';

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

class App extends React.Component {
    state = {productOpen: false};

    isProductOpen = () => {
        return window.location.hash.indexOf('/product/') > -1
    };

    checkProductPage = () => {
        this.setState({productOpen: this.isProductOpen()});
    }

    componentDidMount() {
        this.props.getProducts();
        this.checkProductPage();
        window.addEventListener('hashchange', this.checkProductPage);
    }

    componentWillUnmount() {
        window.removeEventListener('hashchange', this.checkProductPage);
    }
    
    render() {
        const {products} = this.props;
        
        return (
            <Router>
                <div className={`App ${this.state.productOpen && 'productOpen'}`}>
                    <Header />
                    <Route path='/product/:id/:name' render={(props) => <ProductDetails {...props} products={products} />} />
                    <Products products={products} />
                </div>
            </Router>
        );
    }
};

const mapStateToProps = state => ({
    products: state.products
});

const mapDispatchToProps = dispatch => ({
    getProducts: () => dispatch(getProductsAction())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);