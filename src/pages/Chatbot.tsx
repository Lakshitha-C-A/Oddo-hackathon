import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Send, Bot, User, Sparkles } from "lucide-react";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hello! I'm Nexa, your AI travel assistant. 🌍 How can I help you plan your next adventure?",
    sender: "bot",
  },
];

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [input, setInput] = useState("");

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Great choice! I'd recommend visiting during the spring months for the best weather. Would you like me to create a detailed itinerary?",
        "I can help you with that! Based on your preferences, I suggest exploring local markets in the morning and cultural sites in the afternoon. Shall I book some activities?",
        "That sounds exciting! For adventure trips, I recommend packing light layers and comfortable hiking shoes. Want me to generate a packing list?",
        "Perfect! I've found some amazing hotels in that area with excellent reviews. Would you like me to show you the top 3 options?",
      ];

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: "bot",
      };

      setMessages((prev) => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-secondary/30 flex flex-col">
      <Navbar />

      <main className="flex-1 pt-20 pb-4 flex flex-col">
        <div className="container mx-auto px-6 flex-1 flex flex-col max-w-4xl">
          {/* Header */}
          <div className="py-6 text-center">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
              <Sparkles size={16} />
              <span className="text-sm font-medium">Powered by AI</span>
            </div>
            <h1 className="text-2xl font-bold text-foreground">Nexa Travel Assistant</h1>
            <p className="text-muted-foreground mt-1">Ask me anything about your trip!</p>
          </div>

          {/* Chat Container */}
          <div
            className="flex-1 bg-card rounded-2xl overflow-hidden flex flex-col"
            style={{ boxShadow: "var(--shadow-card)" }}
          >
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start gap-3 ${
                    message.sender === "user" ? "flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {message.sender === "user" ? <User size={18} /> : <Bot size={18} />}
                  </div>
                  <div
                    className={`chat-bubble ${
                      message.sender === "user" ? "chat-bubble-user" : "chat-bubble-bot"
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-border">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask Nexa about your trip..."
                  className="flex-1 px-4 py-3 bg-secondary rounded-xl border-0 outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                />
                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center w-12 h-12 rounded-xl p-0"
                >
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Chatbot;
