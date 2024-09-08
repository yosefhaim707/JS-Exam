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
        currentNum =  window.prompt('Please enter a number: ');
        if (currentNum > 0){
            numArr.push(currentNum);
        }
        else{
            condition = false;
        };
    };
    console.log(importedFunctions.highArr(numArr));
};

inputNumber();