import { useContext } from "react";
import { ReciepeContext } from "../Context/ReciepeContext";
import { SearchBar } from "./SearchBar";

export const FiltersBar = () => {
  const { state, dispatch } = useContext(ReciepeContext);

  return (
    <div>
      <fieldset style={{ display: "flex" }}>
        <legend>Filters:</legend>
        <SearchBar />
        <label>
          <input
            type="radio"
            name="categoryFilter"
            value="name"
            checked={state?.searchType === "name"}
            onChange={(e) =>
              dispatch({ type: "SET_SEARCH_TYPE", payload: e.target.value })
            }
          />
          Name
        </label>
        <label>
          <input
            type="radio"
            name="categoryFilter"
            value="ingredients"
            checked={state?.searchType === "ingredients"}
            onChange={(e) =>
              dispatch({ type: "SET_SEARCH_TYPE", payload: e.target.value })
            }
          />
          Ingredients
        </label>
        <label>
          <input
            type="radio"
            name="categoryFilter"
            value="cuisine"
            checked={state?.searchType === "cuisine"}
            onChange={(e) =>
              dispatch({ type: "SET_SEARCH_TYPE", payload: e.target.value })
            }
          />
          Cuisine
        </label>
      </fieldset>
    </div>
  );
};
