export const initialState = {
  reciepesData: [],
  searchType: "name",
  searchValue: ""
};

export const ReciepeReducer = (state, action) => {
  switch (action.type) {
    case "SET_RECIPES":
      return { ...state, reciepesData: action.payload };
    case "ADD_RECIPE":
      localStorage.setItem("recipes", JSON.stringify(action.payload));
      return { ...state, reciepesData: action.payload };
    case "SET_SEARCH_TYPE":
      return { ...state, searchType: action.payload };
    case "SET_SEARCH_VALUE":
      return { ...state, searchValue: action.payload };
    case "DELETE_RECIPE":
      localStorage.setItem("recipes", JSON.stringify(action.payload));
      return { ...state, reciepesData: action.payload };
    default:
      return state;
  }
};
