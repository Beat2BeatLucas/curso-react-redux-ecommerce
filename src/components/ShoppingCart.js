import React, { Component } from 'react';


class ShoppingCart extends Component {
  constructor() {
    super();
    
    this.state = {
      cart: []
    }

    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart(product) {

  }

  render() {
    return (
      <div className="shopping-cart">
        <p>Shopping Cart</p>
        <table>
          <tbody>
            {this.state.cart.map(product => 
                <tr>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>
                    <button><i class="fas fa-trash-alt"></i></button>
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
