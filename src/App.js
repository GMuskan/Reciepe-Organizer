import "./styles.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { SingleReciepe } from "./Pages/SingleReciepe";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:recipeId" element={<SingleReciepe />} />
      </Routes>
    </div>
  );
}
