//boolean 
let flag: boolean = true;
console.log("Value assigned to flag is: " + flag);

//number
let firstValue: number = 12;
console.log("Value Assigned to flag is: " + firstValue);

//String
let string1: string = "Hello";
console.log(string1);

//any
let obj: any = {x: 0};
obj = "any variable";
console.log(obj);

//array
let myArray:Array<string> = ["Oran","Flanagan","bgiuwbguiab"];
for(let j = 0; j < myArray.length; j++)
{
    console.log(myArray[j]);
}

let mySecondArray: number[] = [2, 4, 6];
for (let i = 0; i < mySecondArray.length; i++) 
{
    console.log(mySecondArray[i] + " is in mySecondArray");
}

