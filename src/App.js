import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<TinderCards />} />
      </Routes>
    </div>
  );
}

export default App;
