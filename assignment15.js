// Loan Application Approval System


let income = "$80,000"
let creditScore = 700
let Outstandingdebt= 2


if(income >= '$80,000' && creditScore >= 750 && Outstandingdebt===0){
    console.log("Loan Approved!");
}
else if (income >= '$50,000' && income <= '$80,000' && creditScore >= 700 && Outstandingdebt <=1){
    console.log("Reduced interest rate offered.");
}
else if(income> '$30,000' && income < '$50,000' && creditScore > 650 && Outstandingdebt > 3){
    console.log("Considered.");
}
else{
    console.log("Loan Rejected!");
}
