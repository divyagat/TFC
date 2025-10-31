// src/components/Chatbot.jsx
import React, { useState, useEffect, useRef } from 'react';
import { IoChatbubblesSharp } from 'react-icons/io5';
import './ChatWidget.css';

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        { from: 'bot', text: 'Hi! How can I assist you today?' },
    ]);
    const [input, setInput] = useState('');
    const timeoutRef = useRef(null);
    const messageEndRef = useRef(null);
    const chatbotRef = useRef(null);

    const toggleChat = () => {
        const newState = !isOpen;
        setIsOpen(newState);
        if (newState) resetAutoCloseTimer();
    };

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { from: 'user', text: input.trim() };
        setMessages((prev) => [...prev, userMessage]);
        setInput('');
        scrollToBottom();
        resetAutoCloseTimer();

        setTimeout(() => {
            const botReply = { from: 'bot', text: generateReply(input.trim()) };
            setMessages((prev) => [...prev, botReply]);
            scrollToBottom();
        }, 800);
    };

    const generateReply = (text) => {
        const lower = text.toLowerCase();
        if (lower.includes('hello') || lower.includes('hi')) return 'Hello! 👋';
        if (lower.includes('price')) return 'You can view pricing on our pricing page.';
        if (lower.includes('help')) return 'Of course! Let me assist you.';
        if (lower.includes('contact')) return 'You can reach us through the Contact page.';
        return "I'm a simple bot. Try asking about price, help, or contact.";
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') handleSend();
    };

    const scrollToBottom = () => {
        setTimeout(() => {
            messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 100);
    };

    const resetAutoCloseTimer = () => {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => {
            setIsOpen(false);
        }, 60000);
    };

    useEffect(() => {
        if (isOpen) resetAutoCloseTimer();
        return () => clearTimeout(timeoutRef.current);
    }, [isOpen]);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (chatbotRef.current && !chatbotRef.current.contains(e.target)) {
                setIsOpen(false);
            }
        };
        if (isOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <>
            {/* Floating Chat Icon */}
            <button
                onClick={toggleChat}
                style={{
                    position: 'fixed',
                    bottom: '100px',
                    right: '30px',
                    zIndex: 1000,
                    background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50%',
                    width: '60px',
                    height: '60px',
                    fontSize: '28px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
                    cursor: 'pointer',
                }}
            >
                <IoChatbubblesSharp />
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div
                    ref={chatbotRef}
                    className="chatbot-enter-active"
                    style={{
                        position: 'fixed',
                        bottom: '100px',
                        right: '25px',
                        width: '340px',
                        height: '460px',
                        backgroundColor: '#fff',
                        borderRadius: '16px',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
                        zIndex: 1000,
                        display: 'flex',
                        flexDirection: 'column',
                        overflow: 'hidden',
                        animation: 'fadeIn 0.3s ease-in-out',
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            padding: '14px',
                            background: 'linear-gradient(135deg, #4facfe, #00f2fe)',
                            color: '#fff',
                            fontWeight: 'bold',
                            textAlign: 'center',
                            fontSize: '18px',
                        }}
                    >
                        🤖 Chat Assistant
                    </div>

                    {/* Messages */}
                    <div
                        style={{
                            flex: 1,
                            padding: '10px',
                            overflowY: 'auto',
                            backgroundColor: '#f5f5f5',
                        }}
                    >
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                style={{
                                    textAlign: msg.from === 'user' ? 'right' : 'left',
                                    marginBottom: '10px',
                                }}
                            >
                                <span
                                    style={{
                                        display: 'inline-block',
                                        backgroundColor: msg.from === 'user' ? '#007BFF' : '#E0E0E0',
                                        color: msg.from === 'user' ? 'white' : 'black',
                                        padding: '10px 14px',
                                        borderRadius: '20px',
                                        maxWidth: '80%',
                                        wordWrap: 'break-word',
                                    }}
                                >
                                    {msg.text}
                                </span>
                            </div>
                        ))}
                        <div ref={messageEndRef} />
                    </div>

                    {/* Input */}
                    <div style={{ display: 'flex', borderTop: '1px solid #ccc' }}>
                        <input
                            type="text"
                            placeholder="Type a message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyPress}
                            style={{
                                flex: 1,
                                padding: '12px',
                                border: 'none',
                                outline: 'none',
                                fontSize: '14px',
                                borderRadius: '0',
                            }}
                        />
                        <button
                            onClick={handleSend}
                            style={{
                                padding: '12px 18px',
                                backgroundColor: '#007BFF',
                                color: 'white',
                                border: 'none',
                                cursor: 'pointer',
                                fontWeight: 'bold',
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Chatbot;
