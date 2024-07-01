import { Route, Routes } from "react-router-dom";
import { Main } from "./Components/Main/Main";
import { Tour } from "./Components/Tour/Tour";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route path="/tour/:id" element={<Tour />} />
      </Routes>
    </div>
  );
}

export default App;
