import { useContext, useState } from "react";
import { ReciepeContext } from "../Context/ReciepeContext";
import "../styles.css";
export const RecipeModal = () => {
  const { setRecipeModal, addRecipe } = useContext(ReciepeContext);
  const [recipe, setRecipe] = useState({
    name: "",
    cuisine: "",
    ingredients: "",
    instructions: "",
    imageURL: ""
  });
  return (
    <div className="modal-wrapper">
      <div className="modal">
        <div className="modal-header">
          <h1>Add Details</h1>
        </div>
        <div>
          <label>
            Name:
            <input
              type="text"
              value={recipe?.name}
              onChange={(e) =>
                setRecipe((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </label>
        </div>
        <div>
          <label>
            Cuisine:
            <input
              type="text"
              value={recipe?.cuisine}
              onChange={(e) =>
                setRecipe((prev) => ({ ...prev, cuisine: e.target.value }))
              }
            />
          </label>
        </div>
        <div>
          <label>
            Ingrdients:
            <input
              type="text"
              value={recipe?.ingredients}
              onChange={(e) =>
                setRecipe((prev) => ({ ...prev, ingredients: e.target.value }))
              }
            />
          </label>
        </div>
        <div>
          <label>
            Instructions:
            <input
              type="text"
              value={recipe?.instructions}
              onChange={(e) =>
                setRecipe((prev) => ({ ...prev, instructions: e.target.value }))
              }
            />
          </label>
        </div>
        <div>
          <label>
            image:
            <input
              type="text"
              value={recipe?.imageURL}
              onChange={(e) =>
                setRecipe((prev) => ({ ...prev, imageURL: e.target.value }))
              }
            />
          </label>
        </div>
        <div>
          <button
            onClick={() => {
              addRecipe(recipe);
              setRecipeModal(false);
            }}
          >
            Add
          </button>
          <button onClick={() => setRecipeModal(false)}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
