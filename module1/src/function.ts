function add (num1:number,num2:number):number {
    return num1 + num2;
    // parameter e number type soho bole dilam and return type soho
}
add(1,4);

let addNumber =(number1:number,number2:number):number=>number1+number2;

//function in object;
const ami ={
    kam:'web',
    bal:0,
    nebal(balu:number):number{
        return this.bal + balu;
    }
}

let arr:number[]=[1,2,3,4]
let newar = arr.map((sr:number):number=>sr*sr)