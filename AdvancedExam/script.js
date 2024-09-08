// exam 1
function arrow(num, boolean){
    let finalStr = '';
    for (let index = 0; index < num; index++) {
        finalStr += '-';
    };
    if (boolean){
        finalStr += '>';
        return finalStr;
    };
    finalStr = '<' + finalStr;
    return finalStr;
}

console.log(arrow(4, true));
console.log(arrow(7, false));

// exam 2
function inputNumber(){
    let numArr = [];
    let currentNum = 0;
    condition = true;
    while (condition){
        currentNum =  parseInt(window.prompt('Please enter a number: '));
        if (currentNum > 0){
            numArr.push(currentNum);
        }
        else{
            condition = false;
        };
    };
    console.log(highArr(numArr));
    console.log(numArr.length);
    console.log(sumArr(numArr));
    console.log(avrArr(numArr));
    console.log(fourthPrinter(numArr));

};

// copied from the previous exam
function highArr(arr){
    let highest = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > highest){
            highest = arr[index];
        };
    };
    return highest;
}

function sumArr(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]    
    }
    return sum;
};

function avrArr(arr){
    return sumArr(arr) / arr.length;
};

function fourthPrinter(arr){
    let printedNum = 0;
    if (arr.length > 4){
        printedNum = arr[3];
        return printedNum;
    }
    printedNum = arr[arr.length -1];
    return printedNum;
}

inputNumber();

// exam 3
function pyramid(num){
    let layerStr = ''
    for (let i = 0; i < num; i++){
        layerStr += '*';
        console.log(layerStr);
    };
}

pyramid(5);

// exam 4
function upSidePyramid(num){
    let layerStr = '*'.repeat(num);
    for (let i = 0; i < num; i++){
        console.log(layerStr);
        layerStr = layerStr.slice(0, -1);
    }
}

upSidePyramid(5);

// exam 5
function multiBoard(num){
    for (let i = 1; i < num + 1; i++){
        for (let j = 1; j < num + 1; j++){
            console.log(`${i * j} \t`);
        }
    }
}

multiBoard(5);