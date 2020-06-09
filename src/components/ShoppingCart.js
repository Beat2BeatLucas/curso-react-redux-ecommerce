import React from 'react';
import { removeFromCart } from '../actionCreators';
import { connect } from 'react-redux';


const ShoppingCart = ({ cart, removeFromCart}) => {
    return (
      <div className="shopping-cart">
        <p>Shopping Cart</p>
        <table>
          <tbody>
            {cart.map(product => 
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>${product.price}</td>
                  <td>
                    <button onClick={() => removeFromCart(product)} ><i className="fas fa-trash-alt"></i></button>
                  </td>
                </tr>
            )}
          </tbody>
          <tfoot>
            <tr>
              <td>
                Total: ${cart.reduce((sum, product) => sum + product.price, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    )
}

const mapStateToProps = state => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = dispatch => {
  return {
    removeFromCart(product){
      dispatch(removeFromCart(product));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

/** Con mapStateToProps y mapDispatchToProps estamos pasando dos objetos con
 * propiedades al componente ShoppingCart. El primer objeto corresponde a propiedades
 * con valores del store de redux, y el otro objeto pasa funciones con los action 
 * creators (pueden pasarse los actions creators solos sin un funcion que los envuelva
 * como en este caso). 
 * El método mapDispatchToProps recibe al dispatch del store necesariamente, ya que con
 * este último se permite solicitar cambios al mismo.
 * 
 * El resultado final que se exporta es algo como lo siguiente:
 * 
 * <ShoppingCart 
 *    cart= {state.cart}                                               <---------------------- es el state del redux (store)
 *    removeFromCart= { product => dispatch(removeFromCart(product)) }
 * />
 * 
 */
