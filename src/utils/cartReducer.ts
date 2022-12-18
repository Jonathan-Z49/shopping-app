import { Reducer } from 'react';

import { initCartObject } from '../contexts/CartContext';

export const useCartReducer: Reducer<Cart, ReducerAction> = (
  state = initCartObject,
  action: ReducerAction,
) => {
  switch (action.type) {
    case 'ADD_TO_CART': {
      const itemInArray = state.checkoutItems.find(
        (item) => item.id === action.payload.id,
      ) as Product;

      if (itemInArray) {
        const arrayClone = structuredClone(state.checkoutItems);

        return {
          checkoutItems: arrayClone.map((item) => {
            if (item.id === action.payload.id) {
              item.quantity += 1;
              item.priceOfAllQuantity += item.price;
            }

            return item;
          }),
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + itemInArray.price,
        };
      } else {
        return {
          checkoutItems: [...state.checkoutItems, action.payload],
          totalItems: state.totalItems + 1,
          totalPrice: state.totalPrice + action.payload.price,
        };
      }
    }
    case 'SUBTRACT_FROM_CART': {
      if (action.payload.quantity <= 1) {
        return {
          checkoutItems: state.checkoutItems.filter(
            (item) => item.id !== action.payload.id,
          ),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - action.payload.price,
        };
      } else {
        const arrayClone = structuredClone(state.checkoutItems);

        return {
          checkoutItems: arrayClone.map((item) => {
            if (item.id === action.payload.id) {
              item.quantity -= 1;
              item.priceOfAllQuantity -= item.price;
            }
            return item;
          }),
          totalItems: state.totalItems - 1,
          totalPrice: state.totalPrice - action.payload.price,
        };
      }
    }
    case 'DELETE_FROM_CART': {
      const arrayClone = structuredClone(state.checkoutItems);
      return {
        checkoutItems: arrayClone.filter((item) => item.id !== action.payload.id),
        totalItems: state.totalItems - action.payload.quantity,
        totalPrice: state.totalPrice - action.payload.priceOfAllQuantity,
      };
    }
    default:
      return state;
  }
};
