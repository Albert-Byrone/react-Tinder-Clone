import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import TinderCards from "./TinderCards";
import SwipeButons from "./SwipeButons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/login"
          element={
            <>
              <Header backButton="/" />
              <Login />
            </>
          }
        />
        <Route
          path="/chat/:person"
          element={
            <>
              <Header backButton="/chat" />
              <ChatScreen />
            </>
          }
        />
        <Route
          path="/chat"
          element={
            <>
              <Header backButton="/" />
              <Chats />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header />
              <TinderCards />
              <SwipeButons />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
