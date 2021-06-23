import {cartItems} from "../initialValues/cartItems";
import {ADD_TO_CART, REMOVE_FROM_CART} from "../actions/cartActions";

const initialState = {
    cartItems: cartItems
}

export default function cartReducer(state = initialState, {type, payload}) {
    switch (type) {
        case ADD_TO_CART:
            let product = state.cartItems.find(c => c.product.id === payload.id)
            if (product) {
                product.quantity++;
                return {
                    ...state //yeni state yaratir ,bu sekilde spread ile state'i parcalayarak yeni nesne olusturmus olur ama referans degismez
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, {quantity: 1, product: payload}]
                }
            }

        case REMOVE_FROM_CART:
            return {
                ...state,
                cartItems: state.cartItems.filter((c) => c.product.id !== payload.id)
            }

            break;
        default:
            return state;
    }
}
//export const cartItems=[{quantity:1,product:{productName:"Çubuk kraker"}}]
