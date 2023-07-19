import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ReciepeContext } from "../Context/ReciepeContext";

export const SingleReciepe = () => {
  const { recipeId } = useParams();
  const navigate = useNavigate();
  const { state } = useContext(ReciepeContext);
  const recipeDetails = state?.reciepesData?.find(
    (item) => item?.id === Number(recipeId)
  );

  return (
    <div>
      <h1>{recipeDetails?.name}</h1>
      <div
        style={{
          display: "flex",
          border: "1px solid black",
          borderRadius: "5px",
          margin: "0.5rem",
          maxWidth: "700px",
          position: "relative",
          margin: "auto"
        }}
      >
        <img
          src={recipeDetails?.imageURL}
          alt="recipe-pic"
          width="500"
          height="auto"
        />
        <div style={{ textAlign: "left", margin: "1rem" }}>
          <p>
            <b>Ingredients:</b>
          </p>
          {recipeDetails?.ingredients?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          <p>
            <b>Instructions:</b>
          </p>
          {recipeDetails?.instructions?.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </div>
      </div>
      <button onClick={() => navigate("/")} style={{ margin: "1rem" }}>
        Back
      </button>
    </div>
  );
};
