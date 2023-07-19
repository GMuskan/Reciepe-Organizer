import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ReciepeContext } from "../Context/ReciepeContext";
export const ReciepeCard = ({ item }) => {
  const { deleteRecipe, editRecipe } = useContext(ReciepeContext);
  const navigate = useNavigate();
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "5px",
        margin: "0.5rem",
        maxWidth: "250px"
      }}
    >
      <div>
        <img src={item?.imageURL} alt="recipe-pic" />
        <i
          className="fa fa-trash"
          aria-hidden="true"
          style={{
            position: "relative",
            top: "-8rem",
            right: "-0.5rem",
            color: "black",
            fontSize: "1.5rem",
            cursor: "pointer"
          }}
          onClick={() => deleteRecipe(item?.id)}
        ></i>
        <i
          className="fa fa-pencil"
          aria-hidden="true"
          style={{
            position: "relative",
            top: "-8rem",
            right: "-0.85rem",
            color: "black",
            fontSize: "1.5rem",
            cursor: "pointer"
          }}
          onClick={() => editRecipe(item?.id)}
        ></i>
      </div>
      <h4>{item?.name}</h4>
      <p>
        <b>Cuisine Type:</b> {item?.cuisine}
      </p>
      <p>
        Ingredients:{" "}
        <span>
          See Recipe{" "}
          <i
            className="fa fa-chevron-right"
            aria-hidden="true"
            onClick={() => navigate(`${item?.id}`)}
          ></i>
        </span>
      </p>
      <p>
        Instructions:{" "}
        <span>
          See Recipe{" "}
          <i
            className="fa fa-chevron-right"
            aria-hidden="true"
            onClick={() => navigate(`${item?.id}`)}
          ></i>
        </span>
      </p>
    </div>
  );
};
