const vowels = ['a', 'e', 'o', 'i', 'u', 'y'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];

export function pigLatin(input) {
    input = trimInput(input);
    if (input && !numbers.includes(input[0])) {
        const indexOfFirstVowel = getIndexOfFirstVowel(input.toLowerCase());
        const stringUpToFirstVowel = getStringUpToFirstVowel(input.toLowerCase(), indexOfFirstVowel);
        const inputAfterFirstChar = input.substring(stringUpToFirstVowel.length);
        let pigLatinString = '';
        pigLatinString += checkIfNumber(stringUpToFirstVowel, input.toLowerCase());
        pigLatinString += checkIfVowel(stringUpToFirstVowel, input.toLowerCase());
        pigLatinString += checkIfConsonant(stringUpToFirstVowel, inputAfterFirstChar.toLowerCase());
        const isFirstCharUppercase = input[0].toUpperCase() === input[0];
        return isFirstCharUppercase ? pigLatinString[0].toUpperCase() + pigLatinString.substring(1): pigLatinString;
    }
    return input;
}

export function checkIfVowel(firstChar, wholeString) {
    return vowels.includes(firstChar) ? wholeString + 'yay' : '';
}

export function checkIfConsonant(firstChar, stringAfterFirstChar) {
    if (!vowels.includes(firstChar) && !numbers.includes(firstChar)) {
        return stringAfterFirstChar + firstChar + 'ay'
    }
    return '';
}

export function checkIfNumber(firstChar, input) {
    return numbers.includes(firstChar) ? input : '';
}

export function getStringUpToFirstVowel(input, indexOfFirstVowel) {
    if (indexOfFirstVowel > 0) {
        return input.substring(0, indexOfFirstVowel);
    } 
    return input[0]
}

export function getIndexOfFirstVowel(input) {
    const inputArr = input.split('');
    if (inputArr[0] == 'q') {
        return 2;
    }
    return inputArr.findIndex(char => vowels.includes(char));
}

export function trimInput(input) {
    if (input && typeof input === 'string') {
        return input.trim();
    }
    return '';
}