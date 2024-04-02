// Validate Triangle Sides


let length1 = 17
let length2 = 10
let length3 = 15



if (length1 <=0 || length2 <=0 || length3 <=0){
    console.log("Invalid Side Lengths. All sides must be greater than zero.");
}
else if(length1 + length2 > length3 && length1 + lenghth3 > length2 && length2 + length3 > length1){
    console.log("Triangle can be formed with these lengths.");
}
else{
    console.log("Triangle cannot be formed with these lengths.");
}