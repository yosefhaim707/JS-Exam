// exam 1
let array = [9, 4, 54, 3, 23, 33, 4]

// exam 1.a
 function sumArr(arr){
    let sum = 0;
    for (let index = 0; index < arr.length; index++) {
        sum += arr[index]    
    }
    return sum;
};

// exam 1.b
function multiArr(arr){
    let multi = 1;
    for (let index = 0; index < arr.length; index++) {
        multi *= arr[index]
    }
    return multi;
};

// exam 1.c
function avrArr(arr){
    return sumArr(arr) / arr.length;
};

// exam 1.d
function swapArr(arr){
    let first = arr.shift();
    let last = arr.pop();
    arr.push(first);
    arr.unshift(last);
    return arr;
};

// exam 1.e
function copyArr(arr){
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        newArr.push(arr[index]);
    }
    return newArr;
};

// exam 1.f
function reverseArr(arr){
    let rightIndex = 0;
    let leftIndex = arr.length - 1;
    let rightElement = 0;
    let leftElement = 0;
    while (rightIndex < leftIndex) {
        rightElement = arr[rightIndex];
        leftElement = arr[leftIndex];
        arr[rightIndex] = leftElement;
        arr[leftIndex] = rightElement;
        rightIndex += 1;
        leftIndex -= 1;
    };
    return arr;
}

// exam 1.g
function highArr(arr){
    let highest = 0;
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] > highest){
            highest = arr[index];
        };
    };
    return highest;
}

// exam 1.h
function evenArr(arr){
    let newArr = [];
    for (let index = 0; index < arr.length; index++) {
        if ((arr[index] % 2) == 0){
            newArr.push(arr[index]);
        };
    };
    return newArr;
}

// exam 1 tests
console.log(sumArr(array));
console.log(multiArr(array));
console.log(avrArr(array));
console.log(swapArr(array));
console.log(copyArr(array));
console.log(reverseArr(array));
console.log(highArr(array));
console.log(evenArr(array));

// exam 2
strArr = ['hi', 'only', 'good', 'full', 'stack']

// exam 2.a