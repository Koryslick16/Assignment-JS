// Health Insurance Eligibilty


let age =18
let haspreExistingCondition= false


if(age >=18 && age <=60 && !haspreExistingCondition){
    console.log("Approved!");
}
else if(age >60 && !haspreExistingCondition){
    console.log("Limited Coverage Plan");
}
else{
     console.log("Rejected!");
}