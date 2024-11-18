export const generateAIResponse = (userText: string): string => {
    
    const lowerCaseText = userText.toLowerCase();
    const greetingPattern = /^(hello|hi(?:,\s*how\s*are\s*you)|good\s*evening|hey)$/i;
    // Greetings
    if (lowerCaseText.includes("hi") || lowerCaseText.includes("hello")) {
        return "Hello! How can I help you today?";
    }
    // Order-related queries
    if (lowerCaseText.includes("order")) {
        return "You can place an order by selecting items from our menu. Would you like to view our specials?";
    }
    // Menu-related queries
    if (lowerCaseText.includes("menu")) {
        return "Here's our menu: [Link to menu]. What would you like to order?";
    }
    // Delivery inquiries
    if (lowerCaseText.includes("delivery")) {
        return "We offer delivery within 30 minutes. What's your address?";
    }
    // Payment-related queries
    if (lowerCaseText.includes("payment") || lowerCaseText.includes("pay")) {
        return "You can pay using credit cards, PayPal, or cash on delivery. Which method would you prefer?";
    }
    // Thank you responses
    if (lowerCaseText.includes("thank")) {
        return "You're welcome! Let me know if there's anything else I can help with.";
    }
    // Farewell responses
    if (lowerCaseText.includes("bye") || lowerCaseText.includes("goodbye")) {
        return "Goodbye! Have a great day!";
    }
    // Default fallback
    return "I'm not sure how to respond to that. Could you provide more details or ask in a different way?";
};
