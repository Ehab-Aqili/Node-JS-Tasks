import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  organization: "",
  apiKey: "",
});

const openai = new OpenAIApi(configuration);

function App() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    setIsTyping(true);

    let mesgs = chats;
    mesgs.push({ role: "user", content: message });
    setChats(mesgs);
    setMessage("");

    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content: "You are ChatBot. you help with Email writing.",
          },
          ...chats,
        ],
      })
      .then((result) => {
        mesgs.push(result.data.choices[0].message);
        setChats(mesgs);
        setIsTyping(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <main>
        <h1>Chat-Bot</h1>
        <section>
          {chats && chats.length
            ? chats.map((chat, index) => (
                <p
                  key={index}
                  className={chat.role === "user" ? "user_msg" : ""}
                >
                  <span>{chat.role}</span>
                  <span>:</span>
                  <span>{chat.content}</span>
                </p>
              ))
            : ""}
        </section>
        <div className={isTyping ? " " : "hide"}>
          <p>
            <i>typing</i>
          </p>
        </div>
        <form onSubmit={(e) => chat(e, message)}>
          <input
            type="text"
            name="message"
            value={message}
            placeholder="type a message and hit enter"
            onChange={(e) => setMessage(e.target.value)}
          />
        </form>
      </main>
    </>
  );
}
export default App;
