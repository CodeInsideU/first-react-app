import "./App.css";
import ClassComponent from "./Pages/ClassComponent";
import FunctionalComponent from "./Pages/FunctionalComponent";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// HOC layout

function App() {
  const company = "Coding Club";

  const [name, setName] = useState("Vratik");

  return (
    <Routes>
      <Route path="/" element={<ClassComponent />} />
      <Route
        path="/functional-component"
        element={
          <FunctionalComponent
            name={name}
            age={20}
            company={company}
            setName={setName}
          />
        }
      />
    </Routes>
  );
}

export default App;