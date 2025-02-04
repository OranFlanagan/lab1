function addition(value: string) 
{
    console.log("Value is: " + value);
}
    let firstVal: number = 42;
    let secondVal: number = 1;
    let sumOfVals: string = (firstVal + secondVal).toLocaleString();
    addition(sumOfVals);
    /*adds firstVal and secondVal and passes that answer into sumOfVals
    toLocaleString converts the value 43 into a string so it can to be read without errors*/
    