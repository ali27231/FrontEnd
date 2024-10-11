import React, { useState } from 'react';

const DirectMessages = ({ messages, onSendMessage }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="direct-messages">
      <h3>Direct Messages</h3>
      <ul className="message-list">
        {messages.map((msg, index) => (
          <li key={index} className="message-item">{msg}</li>
        ))}
      </ul>
      <form onSubmit={handleSend} className="message-form">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Write a message..."
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default DirectMessages;
