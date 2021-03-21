const vowels = ['a', 'e', 'o', 'u'];

export function pigLatin(input) {
    if (!input || typeof input !== 'string') {
        return '';
    }
    input = input.trim();
    input = input.toLowerCase();
    let pigLatinString = '';
    const firstChar = input.split('')[0];
    const inputAfterFirstChar = input.substring(1);
    pigLatinString += checkIfVowel(firstChar, input);
    pigLatinString += checkIfConsonant(firstChar, inputAfterFirstChar);
    return pigLatinString;
}

export function checkIfVowel(firstChar, wholeString) {
    return vowels.includes(firstChar) ? wholeString + 'yay' : '';
}
export function checkIfConsonant(firstChar, stringAfterFirstChar) {
    return !vowels.includes(firstChar) ? stringAfterFirstChar + firstChar + 'ay' : '';
}