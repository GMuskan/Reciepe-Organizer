import { useContext } from "react";
import { ReciepeContext } from "../Context/ReciepeContext";

export const SearchBar = () => {
  const { state, dispatch } = useContext(ReciepeContext);

  return (
    <div>
      <label htmlFor="search-box" className="input-label">
        <input
          type="text"
          id="search-box"
          placeholder="Search the item you want"
          value={state?.searchValue}
          onChange={(e) =>
            dispatch({ type: "SET_SEARCH_VALUE", payload: e.target.value })
          }
        />
      </label>
    </div>
  );
};
