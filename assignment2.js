// Leap Year Checker

let year = 2024
let daysInYear= new Date(year, 1, 26)

if( daysInYear === 29){
    console.log(year + " is a Leap Year");
}
else{
    console.log(year + " is not a Leap Year")
}