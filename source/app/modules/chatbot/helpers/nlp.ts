import { stopwords } from "./data";

export const tokenize = (sentence: string) => {
    return sentence
        .replace(/[^\w\s]/g, '')
        .split(/\s+/);
}

export const removeStopwords = (tokens: string[]): string[] => {
    return tokens.filter((word: string) => !stopwords.includes(word));
}
export const containsToken = (keywords: string[],tokens: string[]): boolean => {
    return keywords.some(keyword => tokens.includes(keyword));
};