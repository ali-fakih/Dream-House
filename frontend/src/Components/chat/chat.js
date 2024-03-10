import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import axios from 'axios';

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    // Connect to Socket.io server
    const newSocket = io('http://localhost:3000'); // Connect to backend server running on port 3000
    setSocket(newSocket);

    // Cleanup on component unmount
    return () => newSocket.close();
  }, []);

  useEffect(() => {
    // Listen for new messages
    if (socket) {
      socket.on('message', (message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
      });
    }
  }, [socket]);

  const sendMessage = async () => {
    if (newMessage.trim() !== '') {
      // Send message to server
      try {
        const response = await axios.post('http://localhost:3000/chat/createchat', {
          userId: 'userId', // Specify the user ID here
        });
        const sentMessage = response.data;
        setMessages((prevMessages) => [...prevMessages, sentMessage]);
        setNewMessage('');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const renderMessages = () => {
    return messages.map((message, index) => (
      <div key={index} className={`flex ${message.sender === 'currentUser' ? 'justify-end' : 'justify-start'} mb-2`}>
        <div className={`px-4 py-2 rounded-lg ${message.sender === 'currentUser' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}>
          {message.content}
        </div>
      </div>
    ));
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-darkGreen p-4">
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2 italic">Group Name</h2>
          <hr className='text-white'></hr>
          <p className="text-white mb-2 mt-2">Chatting with:</p>
          <ul>
            <li>User 1</li>
            <hr className='text-white mb-2 mt-2'></hr>
            <li>User 2</li>
            {/* Add more users dynamically if needed */}
          </ul>
        </div>
      </div>
      <div className="w-3/4 bg-lightGreen p-4">
        <div className="flex-1 p-4 overflow-y-auto">
          {renderMessages()}
        </div>
        <div className="flex items-center p-4 border-t">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-4 py-2 rounded-lg border outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            onClick={sendMessage}
            className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none ml-4"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
