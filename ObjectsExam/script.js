//exam 1
function noSpace(str) {
    str.replaceAll(' ', '');
}

// exam 2
function whosLonger(str1, str2) {
    if (str1.length > str2.length){
        return str1;
    }
    else if (str1.length < str2.length){
        return str2;
    }
    return 'the strings are equal'
}

// exam 3
function whosFirst(str1, str2){
    if (str1 > str2){
        return str2;
    }
    else if (str1 < str2){
        return str1;
    }
    return 'the strings are equal'
}

// exam 4
const person = {
    name: 'Gershon',
    age: 60
}

function addChild(obj){
    if (obj > person){
        throw Error('object too big');
    }
    person['child'] = obj;
}

function test(obj){
    try {
        addChild(obj)
    }
    catch (err) {
        console.log(err)
    }
}