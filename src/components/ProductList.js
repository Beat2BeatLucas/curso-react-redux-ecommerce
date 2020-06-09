import React from 'react';
import { addToCart } from '../actionCreators';
import { connect } from 'react-redux';


const ProductList = ({ products, addToCart }) => {
    return (
      <div className="product-list">
          {products.map(product => 
            <div key={product.id} className="product-item">
                <img src={product.image} alt={product.name} />
                <p>{product.name}</p>
                <button onClick={() => addToCart(product)}>{'$' + product.price} <i className="fas fa-shopping-cart"></i></button>
            </div>
           )}
      </div>
    );
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addToCart(product){
            dispatch(addToCart(product));
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductList);

/** Es como si se exportara 
 * 
 *  <ProductList 
 *      products={ state.products }                             <---------------------- es el state del redux (store)                      
 *      addToCart={ product => dispatch(addToCart(product)) }
 * />
 */