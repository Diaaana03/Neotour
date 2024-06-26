import { Route, Routes } from "react-router-dom";
import { Main } from "./Components/Main/Main";
// import { Discover } from "./Components/Discover/Discover";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
      {/* <Discover /> */}
    </div>
  );
}

export default App;
