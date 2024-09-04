//exam 1
function sum(num1, num2) {
    return num1 + num2;
}

// exam 2
function multiple(num1, num2) {
    return num1 * num2;
}

// exam 3
function sub(num1, num2) {
    return num1 - num2;
}

// exam 4
function div(num1, num2) {
    return num1 / num2;
}

// exam 5
function greater(num1, num2) {
    if (num1 > num2){
        return num1;
    }
    return num2;
}

// exam 6
function isEven(num) {
    if (num % 2 == 0){
        return true;
    }
    return false;
}

// exam 7
function size(height, width) {
    return (height * width) / 2;
}

// exam 8
// exam 9
// exam 10
function whosLonger(str1, str2) {
    if (str1.length > str2.length){
        return str1;
    }
    return str2;
}
//exam 11
function upperFirst(str) {
    const first = str[0].toUpperCase();
    const rest = str.slice(1);
    return first + rest;
}