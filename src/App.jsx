import { Route, Routes } from "react-router-dom";
import { Main } from "./Components/Main/Main";
import { Tour } from "./Components/Tour/Tour";
import { Info } from "./Components/Info/Info";
// import { Discover } from "./Components/Discover/Discover";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
      <Tour />
      <Info />
      {/* <Discover /> */}
    </div>
  );
}

export default App;
