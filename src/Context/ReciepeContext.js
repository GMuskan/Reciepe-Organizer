import { createContext, useEffect, useReducer, useState } from "react";
import { initialState, ReciepeReducer } from "../Reducer/ReciepeReducer";
import { recipes } from "../data";

export const ReciepeContext = createContext();

export const ReciepeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ReciepeReducer, initialState);
  const [recipeModal, setRecipeModal] = useState(false);
  const [recipeEditModal, setRecipeEditModal] = useState(false);
  const [activeRecipe, setActiveRecipe] = useState({});

  const addRecipe = (recipe) => {
    const recipeIngredients = recipe?.ingredients.split(",");
    const recipeInstructions = recipe?.instructions.split(",");
    const newRecipes = [...state?.reciepesData];

    const newRecipe = {
      ...recipe,
      ingredients: recipeIngredients,
      instructions: recipeInstructions
    };
    const maxId = state?.reciepesData?.reduce((acc, curr) => {
      return curr.id > acc ? curr.id : acc;
    }, 0);

    newRecipe.id = maxId + 1;
    newRecipes.push(newRecipe);
    dispatch({ type: "ADD_RECIPE", payload: newRecipes });
  };

  const deleteRecipe = (recipeId) => {
    const newRecipes = [...state?.reciepesData];
    const remainingRecipes = newRecipes?.filter(
      (item) => item?.id !== recipeId
    );
    dispatch({ type: "DELETE_RECIPE", payload: remainingRecipes });
  };

  const editRecipe = (recipeId) => {
    setRecipeEditModal(true);
    const selectedRecipe = state?.reciepesData?.find(
      (item) => item?.id === recipeId
    );
    setActiveRecipe(selectedRecipe);
  };

  const changeRecipeDetails = (recipeDetails) => {
    const recipeIngredients = recipeDetails?.ingredients.split(",");
    const recipeInstructions = recipeDetails?.instructions.split(",");
    const newRecipeDetails = {
      ...recipeDetails,
      ingredients: recipeIngredients,
      instructions: recipeInstructions
    };
    const newRecipes = [...state?.reciepesData];
    const editedRecipes = newRecipes?.map((item) =>
      item?.id === newRecipeDetails?.id ? newRecipeDetails : item
    );

    localStorage.setItem("recipes", JSON.stringify(editedRecipes));

    dispatch({
      type: "SET_RECIPES",
      payload: JSON.parse(localStorage.getItem("recipes"))
    });
  };

  const applyFilters = (recipes) => {
    if (state?.searchType === "name") {
      return recipes.filter(({ name }) =>
        name?.toLowerCase()?.includes(state?.searchValue?.toLowerCase())
      );
    } else if (state?.searchType === "ingredients") {
      return recipes.filter(({ ingredients }) =>
        ingredients
          ?.toString()
          ?.toLowerCase()
          ?.includes(state?.searchValue?.toLowerCase())
      );
    } else if (state?.searchType === "cuisine") {
      return recipes.filter(({ cuisine }) =>
        cuisine?.toLowerCase()?.includes(state?.searchValue?.toLowerCase())
      );
    } else return;
  };

  useEffect(() => {
    const existingRecipes = localStorage.getItem("recipes");
    if (existingRecipes) {
      dispatch({
        type: "SET_RECIPES",
        payload: JSON.parse(existingRecipes)
      });
    } else {
      dispatch({
        type: "SET_RECIPES",
        payload: recipes
      });
    }
  }, []);

  const filteredRecipes = applyFilters(state?.reciepesData);
  return (
    <ReciepeContext.Provider
      value={{
        state,
        dispatch,
        recipeModal,
        setRecipeModal,
        addRecipe,
        filteredRecipes,
        deleteRecipe,
        editRecipe,
        recipeEditModal,
        setRecipeEditModal,
        activeRecipe,
        setActiveRecipe,
        changeRecipeDetails
      }}
    >
      {children}
    </ReciepeContext.Provider>
  );
};
