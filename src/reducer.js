export const initialState = {
  basket: [],
  user: null,
};
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
function reducer(state, action) {
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "ADD_TO_BASCKET":
      // logic for add

      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASCKET":
      // logic for rempve

      let newBasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        // item exist and remove it
        newBasket.splice(index, 1);
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
}
export default reducer;
