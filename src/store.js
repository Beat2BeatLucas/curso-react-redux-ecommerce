import { createStore } from 'redux';

const initialState = {
    cart: [],
    products: [
        { id: 1, name: "Hipster Ultimate", price: 299, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" },
        { id: 2, name: "On Motion Live", price: 99, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-2.jpg" },
        { id: 3, name: "Underground Max", price: 149, image: "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-3.jpg" },
    ]
}

const reducer = (state, action) => {
    if(action.type === "ADD_TO_CART"){
        return {
            ...state,
            cart: state.cart.concat(action.product)
        }
    } else if(action.type === "REMOVE_FROM_CART"){
        return {
            ...state,
            cart: state.cart.filter(product => product.id !== action.product.id)
        }
    }
    return state;
}

export default createStore(reducer, initialState);

/** El array de productos contiene 3 items iniciales, y el carrito de compras se encuentra vacio */