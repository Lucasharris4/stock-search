const vowels = ['a', 'e', 'o', 'u'];
const numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
const specialPrefixArr = ['qu', 'ch', 'th' ]
const specialPrefixThreeCharArr = ['sch'];

export function pigLatin(input) {
    if (input && typeof input === 'string' && input.trim()) {
        input = input.trim();
        let pigLatinString = '';
        const firstChar = getFirstChar(input.toLowerCase());
        const isFirstCharUppercase = input[0].toUpperCase() === input[0];
        const inputAfterFirstChar = input.substring(firstChar.length);
        pigLatinString += checkIfNumber(firstChar, input.toLowerCase());
        pigLatinString += checkIfVowel(firstChar, input.toLowerCase());
        pigLatinString += checkIfConsonant(firstChar, inputAfterFirstChar.toLowerCase());
        return isFirstCharUppercase ? pigLatinString[0].toUpperCase() + pigLatinString.substring(1): pigLatinString;
    }
    return '';
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

export function getFirstChar(input) {
    if (specialPrefixArr.includes(input.substring(0, 2))) {
        return input.substring(0, 2);
    } else if (specialPrefixThreeCharArr.includes(input.substring(0, 3))) {
        return input.substring(0, 3);
    }
    return input[0]
}