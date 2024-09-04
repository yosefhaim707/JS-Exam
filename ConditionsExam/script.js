// exam 1
let inputNum = prompt('Please Enter A number');

if (inputNum > 10){
    window.alert('The Number Is Greater Then 10')
}

// exam 2
let inputNumFirst = prompt('Please Enter A number');
let inputNumSecond = prompt('Please Enter A number');
if (inputNumFirst == inputNumSecond){
    window.alert('The numbers are equal')
}
else if (inputNumFirst > inputNumSecond){
    window.alert(inputNumFirst)
}
else {
    window.alert(inputNumSecond)
}

// exam 3
let inputStr = prompt('Please Enter A string');
const lengthStr = inputStr.length;
if (lengthStr > 20){
    window.alert('Big thn 20')
}
else if (lengthStr > 10){
    window.alert('Big then 10')
}
else{
    window.alert('Less then 10')
}

// exam 4
let inputStrSecond = prompt('Please Enter A string');
const lengthStrSecond = inputStr.length;
if (lengthStr > 20){
    window.alert(inputStrSecond.slice(0, 21))
}
else{
    window.alert(lengthStrSecond)
}

// exam 4
let inputNumDay = prompt('Please Enter A number between 1 and 7');
let message = ''
switch(inputNumDay){
    case 1:
        message = 'Sunday'
        break
    case 2:
        message = 'Monday'
        break
    case 3:
        message = 'Tuesday'
        break
    case 4:
        message = 'Wednesday'
        break
    case 5:
        message = 'Thursday'
        break
    case 6:
        message = 'Friday'
        break
    case 7:
        message = 'Saturday'
        break
    default:
        message = 'Inavalid number'
    }
window.alert(message);
