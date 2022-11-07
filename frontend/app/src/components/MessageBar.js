import "./Messages.css";

import Message from "./Message";

const MessageBar = (props) => {
  const rows = [];

  const MESSAGES = [
    { thoughtMessage: "I feel tired" },
    { thoughtMessage: "Hi " },
    { thoughtMessage: "Hi, there" },
    {
      thoughtMessage: "I said hi, hi there",
    },
    { thoughtMessage: "That's all" },
    { thoughtMessage: "I agree" },
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
