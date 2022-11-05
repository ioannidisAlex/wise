import "./Message.css";

const Message = ({ message }) => {
  //console.log(message.thoughtMessage);
  return (
    <div className={`message ${message.length % 2 == 0 && "person"}`}>
      <div className="messageContent">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Message;
