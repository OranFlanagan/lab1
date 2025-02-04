function myFun(value) {
    return value.length;
}
console.log(myFun("test 1"));
//myFun takes a string value as an argument and returns how long it is using the "length" the output will be 7
function countSpaces(value) {
    return value.length;
}
console.log(countSpaces("Test 1"));
//this does exactly what myFuun does
function countNoSpaces(value) {
    return value.trim().length;
}
console.log(countNoSpaces(" test 1 "));
//the use of .trim() takes away the leading and trailing whitespace so the output will still be 7
function countBoth(value, spaces) {
    var length;
    //if the string has spaces in its value its included in the length of the value
    if (spaces) {
        length = value.length;
    }
    //but if the value has no leading or trailing whitespace it is trimmed from the value
    else {
        length = value.trim().length;
    }
    return length;
}
console.log("String length with spaces and all is:" + countBoth("test 1", false));
//this returns 7 and includes spaces
console.log("String length with spaces not included in the count: " + countBoth(" test 1 ", true));
//this also returns 7 and trims the excess whitespace
console.log("String length with spaces and all is, not setting spaces parameter so will default to false: " + countBoth("test 1"));
//this defaults to false as it is like the first test because the "spaces" parameter is oprional 
