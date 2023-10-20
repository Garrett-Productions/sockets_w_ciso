function ChatCard({messages}){
  return(
  <div className="card shadow mb-3">
    <div className="card-body">
      {messages.length > 0 && messages.map((message) => (
        <p className="card-text" key={message.id}
          >{message.name} says:{message.text}
        </p>
          ))}
    </div>
  </div>
  )
}

export default ChatCard;