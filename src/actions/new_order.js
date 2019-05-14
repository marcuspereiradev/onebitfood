import { ADD_ORDER_ITEM } from "./action_types";

export const addOrderItem = (restaurant, product, quantity) => {
  return {
    type: ADD_ORDER_ITEM,
    restaurant: restaurant,
    product: product,
    quantity: quantity
  }
}
