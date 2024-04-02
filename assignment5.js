// Simple Calculator

let  num1 = 3;
let num2 = 4;
let operation =  '+';


switch(operation){
    case '+':
        console.log( num1 + num2);
        break;
    case '-':
        console.log( num1 - num2);
        break;
    case '/':
        if(num2 !== 0) {
            console.log( num1 / num2);
        } else{
            console.log( "Error! Division by zero is not possible");
        }
        break;
    case '%':
    console.log( num1 % num2);
        break;
    default:
        console.log("Invalid Operation");
        break;
    
    }


 
