// Validate Triangle Sides


let side1 = 17
let side2 = 10
let side3 = 15



if (side1 <=0 || side2 <=0 || side3 <=0){
    console.log("Invalid Side Lengths. All sides must be greater than zero.");
}
else if(side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1){
    console.log("Triangle can be formed with these lengths.");
}
else{
    console.log("Triangle cannot be formed with these lengths.");
}
