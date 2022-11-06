import "./Messages.css";

import Message from "./Message";

const MessageBar = (props) => {
  const rows = [];

  const MESSAGES = [
    { thoughtMessage: "I feel tired" },
    { thoughtMessage: "I have negative thought" },
    { thoughtMessage: "I feeel much lighter" },
    {
      thoughtMessage:
        "I mishear what vlasis said and i said i would go live outside house after this andriana smiled back and repeatede",
    },
    { thoughtMessage: "That's all" },
    { thoughtMessage: "I agree!" },
    { thoughtMessage: "Let's just talk" },
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
