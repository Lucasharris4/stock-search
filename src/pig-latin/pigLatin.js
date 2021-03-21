const vowels = ['a', 'e', 'o', 'u'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export function pigLatin(input) {
    if (input && typeof input === 'string' && input.trim()) {
        input = input.toLowerCase();
        let pigLatinString = '';
        const firstChar = input.split('')[0];
        const inputAfterFirstChar = input.substring(1);
        pigLatinString += checkIfNumber(firstChar, input);
        pigLatinString += checkIfVowel(firstChar, input);
        pigLatinString += checkIfConsonant(firstChar, inputAfterFirstChar);
        return pigLatinString;
    }
    return '';
}

export function checkIfVowel(firstChar, wholeString) {
    return vowels.includes(firstChar) ? wholeString + 'yay' : '';
}
export function checkIfConsonant(firstChar, stringAfterFirstChar) {
    return !vowels.includes(firstChar) && !numbers.includes(firstChar) ? stringAfterFirstChar + firstChar + 'ay' : '';
}

export function checkIfNumber(firstChar, input) {
    return numbers.includes(firstChar) ? input : '';
}