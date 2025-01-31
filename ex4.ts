function myFun(value:string):number 
{
    return value.length;
}
console.log(myFun("test 1"));

function countSpaces(value:string):number
{
    return value.length;
}
console.log(countSpaces("Test 1"));

function countNoSpaces(value:string):number
{
    return value.trim().length;
}
console.log(countNoSpaces("test 1"));

function countBoth(value:string, spaces:boolean):number
{
    let length: number;
    if(spaces)
    {
        length = value.length;
    }
    else
    {
        length = value.trim().length;
    }
    return length;
}
console.log(countBoth("Test 1 ", true));
console.log(countBoth("Test 1", false));

console.log(countBoth("Test 1"));