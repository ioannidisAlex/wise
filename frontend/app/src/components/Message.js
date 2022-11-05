const Message = ({ message }) => {
  console.log(message.thoughtMessage);
  return (
    <div className="messageContent">
      <p>{message}</p>
    </div>
  );
};

export default Message;
