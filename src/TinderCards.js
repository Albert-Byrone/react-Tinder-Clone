  const [people, setPeople] = useState([
    {
      name: "Mary Kom",
      url: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Mary_Kom_-_British_High_Commission%2C_Delhi%2C_27_July_2011.jpg",
    },
    {
      name: "Jobe Steve",
      url: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2MzU3OTcxMTUwODQxNTM1/steve-jobs--david-paul-morrisbloomberg-via-getty-images.jpg",
    },
    {
      name: "Maria Sharapova",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Maria_Sharapova_Australian_Open_Players%27_Party_2015.jpg/800px-Maria_Sharapova_Australian_Open_Players%27_Party_2015.jpg",
    },
  ]);
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
