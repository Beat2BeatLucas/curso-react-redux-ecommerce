import React, { Component } from 'react';
import store from '../store';


class ShoppingCart extends Component {
  constructor() {
    super();
    
    this.state = {
      cart: []
    }

    this.removeFromCart = this.removeFromCart.bind(this);
  }

  componentDidMount(){
    store.subscribe(() => {
      this.setState({
        cart: store.getState().cart,
      });
    });
  }

  removeFromCart(product) {
    store.dispatch({
      type: "REMOVE_FROM_CART",
      product
    });
  }

  render() {
    return (
      <div className="shopping-cart">
        <p>Shopping Cart</p>
        <table>
          <tbody>
            {this.state.cart.map(product => 
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>
                    <button onClick={() => this.removeFromCart(product)} ><i className="fas fa-trash-alt"></i></button>
                  </td>
                </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td>
                Total: ${this.state.cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
  }

}

export default ShoppingCart;
