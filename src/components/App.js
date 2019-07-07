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
    componentDidMount() {
        this.props.getProducts();
    }
    
    render() {
        return (
            <Router>
                <div className='App'>
                    <Header />
                    <Route path='/' exact render={(props) => <Products {...props} products={this.props.products} />} />
                    <Route path='/product/:id/:name' render={(props) => <ProductDetails {...props} products={this.props.products} />} />
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