import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload
      // check if items exist in cart
      const existsItem = state.cartItems.find(
        (cartItem) => cartItem.productId === item.productId
      )

      if (existsItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.productId === existsItem.productId ? item : cartItem
          )
        }
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.productId !== action.payload
        )
      }
    default:
      return state
  }
}
