// Validate Triangle Type


let side1= 5;
let side2= 5;
let side3= 7;


if(side1 <=0 || side2 <=0 || side3 <=0){
    console.log("Invalid sides. All sides must be greater than zero.");
}
else if(side1 === side2 && side2 === side3){
    console.log("Equilateral Triangle");
}
else if(side1 === side2 || side1 === side3 || side2 === side3){
    console.log("Isosceles Triangle")
}
else{
    console.log("Scalene Triangle")
}