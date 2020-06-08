import React, { Component } from 'react';
import ProductList from './components/ProductList';
import ShoppingCart from './components/ShoppingCart';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <p>Ecommerce</p>
        </header>
        <section id="ecommerce-body">
          <ProductList />
          <ShoppingCart />
        </section>
      </div>
    );
  }
}

export default App;
