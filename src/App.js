import "./App.css";
import Header from "./Header";

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
