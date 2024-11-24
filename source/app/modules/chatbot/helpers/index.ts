// Import your utility functions
import { tokenize, removeStopwords } from './nlp';

// Keywords for intents
const intentKeywords = {
    greetings: ["hi", "hello", "hey"],
    order: ["buy", "order", "want", "purchase"],
    menu: ["menu", "options", "food"],
    delivery: ["delivery", "deliver", "time"],
    payment: ["pay", "payment", "method", "card", "cash"],
    thanks: ["thank", "thanks"],
    goodbye: ["bye", "goodbye", "see you"],
    help: ["help", "assist", "support"]
};

// Keywords for entities
const foodItems = ["pizza", "burger", "pasta", "sushi", "salad"];

export const generateAIResponse = (userText: string): string => {
    // Step 1: Preprocess the input
    const lowerCaseText = userText.toLowerCase();
    const tokens = tokenize(lowerCaseText);
    const filteredTokens: string[] = removeStopwords(tokens);

    console.log("Tokens:", tokens);
    console.log("Filtered Tokens:", filteredTokens);

    // Step 2: Define helper function for matching tokens
    const containsToken = (keywords: string[]): boolean => {
        return keywords.some(keyword => filteredTokens.includes(keyword));
    };

    // Step 3: Match intents
    if (containsToken(intentKeywords.greetings)) {
        return "Hello! How can I assist you today?";
    }

    if (containsToken(intentKeywords.order)) {
        const entity = filteredTokens.find(token => foodItems.includes(token));
        if (entity) {
            return `Great! You want to order ${entity}. Would you like to add anything else?`;
        }
        return "It seems like you want to place an order. What would you like to order?";
    }

    if (containsToken(intentKeywords.menu)) {
        return "Here’s our menu: [Link to menu]. Let me know if you’d like to order something!";
    }

    if (containsToken(intentKeywords.delivery)) {
        return "We deliver within 30 minutes. Can I have your address?";
    }

    if (containsToken(intentKeywords.payment)) {
        return "We accept credit cards, PayPal, and cash on delivery. Which would you like to use?";
    }

    if (containsToken(intentKeywords.thanks)) {
        return "You're welcome! Let me know if there's anything else I can help with.";
    }

    if (containsToken(intentKeywords.goodbye)) {
        return "Goodbye! Have a great day!";
    }

    if (containsToken(intentKeywords.help)) {
        return "Sure! What do you need assistance with?";
    }

    // Step 4: Handle unknown input
    return "I'm not sure how to respond to that. Could you clarify or ask differently?";
};
