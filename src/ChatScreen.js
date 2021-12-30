  const [message, setMessage] = useState([
    {
      name: "Albert Byrone",
      message: "Good morning to you ",
      image:
        "https://www.worldatlas.com/r/w1200/upload/8b/da/5f/shutterstock-1098962144.jpg",
    },
    {
      name: "Sammy",
      message: "Hi how are you",
      image:
        "https://www.worldatlas.com/r/w1200/upload/8b/da/5f/shutterstock-1098962144.jpg",
    },
    {
      message: "Hi, I am fine thank you.How are you",
    },
  ]);
  const handleSend = (e) => {
    e.preventDefault();
    setMessage([...message, { message: input }]);
    setInput(""); 
  };
          <div className="chatScreen__message">
            <Avatar
              className="chatScreen__image"
              alt={message.name}
              src={message.image}
            />
            <p className="chatScreen__text">{message.message}</p>
          </div>
        ) : (
          <div className="chatScreen__message">
            <p className="chatScreen__textUser">{message.message}</p>
          </div>
        )
      <form className="chatScreen__input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="chatScreen__inputField"
          type="text"
          placeholder="Type a message"
        />
        <button
          type="submit"
          onClick={handleSend}
          className="chatScreen__inputButton "
        >
          Send{" "}
        </button>
      </form>
    </div>
  );
}
