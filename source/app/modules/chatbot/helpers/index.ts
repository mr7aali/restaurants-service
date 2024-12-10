// Import your utility functions
import { Category } from '../../foodCategory/foodCategory.model';
import { MenuItem } from '../../foodItem/foodItem.model';
import { tokenize, removeStopwords } from './nlp';
import { IFoodItem } from './type';

// Keywords for intents
const intentKeywords = {
    greetings: ["hi", "hello", "hey"],
    order: ["buy", "order", "want", "purchase"],
    menu: ["menu", "options", "food"],
    delivery: ["delivery", "deliver", "time"],
    payment: ["pay", "payment", "method", "card", "cash"],
    thanks: ["thank", "thanks"],
    goodbye: ["bye", "goodbye", "see you"],
    help: ["help", "assist", "support"],
    category: ["category", "categories", "types", "kind"],
};

// Keywords for entities
export const generateAIResponse = async (userText: string): Promise<string> => {

    const foodCategory = await Category.find({}, { _id: 1, name: 1 });
    console.log(foodCategory)
    // Step 1: Preprocess the input
    const lowerCaseText = userText.toLowerCase();
    const tokens = tokenize(lowerCaseText);
    console.log(tokens)
    const filteredTokens: string[] = removeStopwords(tokens);
    const containsToken = (keywords: string[]): boolean => {
        return keywords.some(keyword => filteredTokens.includes(keyword));
    };

    // Step 3: Match intents
    if (containsToken(intentKeywords.greetings)) {
        return "Hello! How can I assist you today?";
    }

    if (containsToken(intentKeywords.order)) {
        const foodItemsWithID: IFoodItem[] = await MenuItem.find({}, { name: 1, _id: 1, basePrice: 1 });
        const foodItems = foodItemsWithID.map((Item: { _id: string; name: string }) => Item.name.toLowerCase());
        const foodItemsEntity = filteredTokens.find(token => foodItems.includes(token));

        if (foodItemsEntity) {
            // const findOrderedItem = foodItemsWithID.filter(Item => Item.name.toLowerCase() === foodItemsEntity);
            return `Great! You want to order ${foodItemsEntity}. Would you like to add anything else?`;
        }
        const categoryWithID: IFoodItem[] = await Category.find({}, { name: 1 });
        const categories = categoryWithID.map((Item: { _id: string; name: string }) => Item.name.toLowerCase());
        const categoriesEntity = filteredTokens.find(token => categories.includes(token));

        const categoryIDs: string[] = categoryWithID.filter(Item => Item.name.toLowerCase() === categoriesEntity).map(Item => Item._id);


        if (!!categoryIDs[0]) {
            const findMenu = await MenuItem.find({ category: categoryIDs[0] }, { name: 1 });
            // const menuItems = await MenuItem.find({}, { name: 1, _id: 0 });
            const menuString = findMenu.slice(0, -1).map(item => item.name).join(', ');
            return `We have ${menuString + " and " + findMenu.at(-1).name}.What would you like to order?`
        }


        return "It seems like you want to place an order. What would you like to order?";
    }
    if (containsToken(intentKeywords.category)) {
        const categoryList = foodCategory.map(category => category.name);
        const categoryString = categoryList.slice(0, -1).join(', ') + " and " + categoryList.at(-1);
        return `Here are the available food categories: ${categoryString}. Which category are you interested in?`;
    }

    if (containsToken(intentKeywords.menu)) {
        const menuItems = await MenuItem.find({}, { name: 1, _id: 0 });
        const menuString = menuItems.slice(0, -1).map(item => item.name).join(', ');
        return `Here’s our menu: ${menuString + " and " + menuItems.at(-1).name}. Let me know if you’d like to order something!`;
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
    //if order the menu items 


    // if (containsToken(menuItems)) {

    // }
    // Step 4: Handle unknown input
    return "I'm not sure how to respond to that. Could you clarify or ask differently?";
};
