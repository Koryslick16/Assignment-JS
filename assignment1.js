// Custom password Strength Checker


let password= "water";

if(password.length < 6){
    console.log("Too weak, password length should be at least 6 characters");
}
else if (/^\d + &/. test(password) || /^[a-z A-Z]+ &/.test(password)) {
    console.log("Too weak, password should contain both letters and numbers")
} 
else{
    console.log("The password is strong");
}
