import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import database from "./firebase";
import "./TinderCards.css";
function TinderCards() {
  const [people, setPeople] = useState([]);

  // a piece of code that runs based on a condition
  useEffect(() => {
    database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    // runs once if left blank
  }, []);
  return (
    <div>
      <div className="tinderCards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
          
        ))}
      </div>
    </div>
  );
}

export default TinderCards;
