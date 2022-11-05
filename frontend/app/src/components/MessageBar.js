import Message from "./Message";

const MessageBar = (props) => {
  const rows = [];

  const MESSAGES = [
    { thoughtMessage: "I feel tired" },
    {
      thoughtMessage:
        "I mishear what vlasis said and i said i would go live outside house after this andriana smiled back and repeated",
    },
    { thoughtMessage: "That's all" },
    { thoughtMessage: "I agree!" },
    { thoughtMessage: "Let's just talk" },
    { thoughtMessage: "I have negative thought" },
  ];

  MESSAGES.forEach((MESSAGE) => {
    rows.push(<Message message={MESSAGE.thoughtMessage} />);
  });

  return (
    <div className="messages">
      <tbody>{rows}</tbody>
    </div>
  );
};

export default MessageBar;
