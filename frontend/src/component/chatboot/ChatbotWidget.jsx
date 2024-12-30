import React, { useState } from "react";
import "./ChatbotWidget.css"; // Ajoutez vos styles ici
import axios from "axios";

const ChatbotWidget = () => {
    const [isOpen, setIsOpen] = useState(false); // Gère l'état de la fenêtre (ouverte/fermée)
    const [messages, setMessages] = useState([]); // Messages envoyés/reçus
    const [input, setInput] = useState(""); // Champ de saisie utilisateur

    // Fonction pour envoyer un message au chatbot
    const sendMessage = async () => {
        if (!input.trim()) return;
    
        setMessages([...messages, { sender: "user", text: input }]);
    
        try {
            const response = await fetch("http://localhost:1000/openai/tasks", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ message: input }),
            });
    
            if (!response.ok) {
                // Si le backend retourne un statut d'erreur (ex : 400 ou 500)
                const errorData = await response.json();
                throw new Error(errorData.error || "Une erreur est survenue côté serveur.");
            }
    
            const data = await response.json();
            const botReply = data.message || "Réponse inattendue du chatbot.";
    
            setMessages((prevMessages) => [...prevMessages, { sender: "bot", text: botReply }]);
        } catch (error) {
            console.error("Erreur lors de l'envoi du message :", error.message);
            setMessages((prevMessages) => [
                ...prevMessages,
                { sender: "bot", text: "Erreur de connexion au serveur. Veuillez réessayer." },
            ]);
        }
    
        setInput("");
    };
    
    

    return (
        <div className={`chatbot-widget ${isOpen ? "open" : "closed"}`} >
            {/* Bouton pour ouvrir/fermer le chatbot */}
            <button className="chatbot-toggle" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? "–" : "💬"}
            </button>

            {/* Fenêtre du chatbot */}
            {isOpen && (
                <div className="chatbot-window">
                    <div className="chatbot-header">
                        <h4>Chatbot</h4>
                        <button onClick={() => setIsOpen(false)}>×</button>
                    </div>
                    <div className="chatbot-messages">
                        {messages.map((msg, index) => (
                            <div
                                key={index}
                                className={`message ${msg.sender === "user" ? "user-message" : "bot-message"}`}
                            >
                                {msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="chatbot-input">
                        <input
                            type="text"
                            placeholder="Tapez votre message..."
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button onClick={sendMessage}>Envoyer</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatbotWidget;
