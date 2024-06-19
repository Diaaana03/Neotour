import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Discover } from "./Components/Discover/Discover";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
      <Discover />
    </div>
  );
}

export default App;
