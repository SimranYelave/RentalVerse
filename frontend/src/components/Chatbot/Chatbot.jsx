// src/components/Chatbot/Chatbot.jsx
import React, { useState } from 'react';
import './Chatbot.css';
import data from '../../assets/dataset.json'; // Import the dataset

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false); // Controls whether the chatbot is open or minimized
  const [messages, setMessages] = useState([
    { text: "Hello! Ask me anything about RentalVerse.", sender: "bot" }
  ]);
  const [input, setInput] = useState("");

  // Toggle the chatbot's open state
  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  // Function to handle sending a message
  const handleSend = () => {
    if (input.trim() === "") return;

    // Add the user's message to the chat
    setMessages([...messages, { text: input, sender: "user" }]);

    // Find the corresponding answer in the dataset
    const foundQuestion = data.questions.find(q => 
      q.question.toLowerCase() === input.toLowerCase()
    );

    // Determine the bot's response
    const botResponse = foundQuestion
      ? foundQuestion.answer
      : "Sorry, I don't know the answer to that.";

    // Add the bot's response to the chat with a slight delay
    setTimeout(() => {
      setMessages(prev => [...prev, { text: botResponse, sender: "bot" }]);
    }, 500);

    // Clear the input field
    setInput("");
  };

  return (
    <div className="chatbot-container">
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chat-header">
            <h4>Chat with us</h4>
            <button className="close-btn" onClick={toggleChatbot}>X</button>
          </div>
          <div className="chat-window">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.sender}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input-section">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question..."
            />
            <button onClick={handleSend}>Send</button>
          </div>
        </div>
      )}
      <div className="chatbot-icon" onClick={toggleChatbot}>
        <img src="https://www.shutterstock.com/image-vector/chat-bot-logo-design-concept-600nw-1938811039.jpg" alt="Chat Icon" />
      </div>
    </div>
  );
};

export default Chatbot;
