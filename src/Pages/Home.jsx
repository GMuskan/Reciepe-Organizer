import { useContext } from "react";
import { FiltersBar } from "../Components/FiltersBar";
import { ReciepeCard } from "../Components/ReciepeCard";
import { RecipeEditModal } from "../Components/RecipeEditModal";
import { RecipeModal } from "../Components/RecipeModal";
import { ReciepeContext } from "../Context/ReciepeContext";

export const Home = () => {
  const {
    recipeModal,
    setRecipeModal,
    filteredRecipes,
    recipeEditModal
  } = useContext(ReciepeContext);
  return (
    <div>
      <h1>Reciepe Organizer</h1>
      <FiltersBar />
      <h1>All Recipies: </h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr" }}>
        {filteredRecipes?.length > 0 ? (
          filteredRecipes.map((item) => (
            <ReciepeCard key={item.name} item={item} />
          ))
        ) : (
          <div>No available items</div>
        )}
        <i
          className="fa fa-plus-circle"
          aria-hidden="true"
          onClick={() => setRecipeModal(true)}
          style={{
            fontSize: "5rem",
            position: "relative",
            margin: "auto",
            cursor: "pointer"
          }}
        ></i>
      </div>
      {recipeModal && <RecipeModal />}
      {recipeEditModal && <RecipeEditModal />}
    </div>
  );
};
