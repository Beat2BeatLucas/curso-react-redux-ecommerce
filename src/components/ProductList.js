import React, { Component } from 'react';
import store from '../store';

class ProductList extends Component {
  constructor() {
    super();
    
    this.state = {
      products: [
        { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
        { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
        { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
      ]
    }

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart(product) {
    store.dispatch({
        type: "ADD_TO_CART",
        product
    });
  }

  render() {
    return (
      <div className="product-list">
          {this.state.products.map(product => 
            <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <button onClick={() => this.addToCart(product)}>{'$' + product.price} <i className="fas fa-shopping-cart"></i></button>
            </div>
           )}
      </div>
    );
  }

}

export default ProductList;