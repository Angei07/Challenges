function transformString(str) {
    const length = str.length;

    if (length % 3 === 0 && length % 5 === 0) {
        return str.split('').reverse().map((char) => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        return str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        return str.split('').map((char) => char.charCodeAt(0)).join(' ');
    } else {
        return str;
    }
}

// Example usage:
const str = "Hamburger";
console.log(transformString(str)); // Output: "regrubmaH"

const str2 = "Pizza";
console.log(transformString(str2)); // Output: "80 105 122 122 97"

const str3 = "Chocolate Chip Cookie";
console.log(transformString(str3)); // Output: "eikooCpihCetalocohC"