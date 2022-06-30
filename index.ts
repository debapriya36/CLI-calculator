
import { question } from "readline-sync";

function isNumber(str:string): boolean{
   let num=parseInt(str);
   let isNum: boolean=(!(isNaN(num))); // isNaN -> is_not_a_number function -> this return true if input is not a num. 
   return isNum;
}

function isOperator(op : string): boolean{
   
    let ans: boolean= false;
    if(op==='*' || op==='+' || op==='-' || op==='/' || op==='%' || op==='^' || op==='&' || op==='|')ans=true;
    return ans;
}

function calculate(num1: number, op : string, num2 : number): number{
      
    if(op==='+')return num1+num2;
    if(op==='-')return num1-num2;
    if(op==='*')return num1*num2;
    if(op==='/')return num1/num2;
    if(op==='&')return ((num1)&(num2));
    if(op==='^')return ((num1)^(num2));
    if(op==='%')return num1%num2;
    return ((num1)|(num2));
}


function main(): void{
    
  let userInputStr1: string =question('Enter First Number :\n');
  let operator: string =question('Enter Operation :\n');
  let userInputStr2: string=question('Enter Second Number :\n');
 
  let isValid: boolean=(isNumber(userInputStr1) && isOperator(operator) && isNumber(userInputStr2));
  if(!isValid)
  {
    console.log('Invalid Input!\n');
    main();
  }
  else 
  {
    let num1: number=parseInt(userInputStr1);
    let num2: number=parseInt(userInputStr2);
    let result: number=calculate(num1,operator,num2);
    console.log(`The value of ${num1} ${operator} ${num2} is = ${result}`);
  }

}

main();
