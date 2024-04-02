// University Scholarship Eligibility


let GPA = 4.0
let extracurricularActivities = true
let academicRecord = true
let finanacialNeed = true


if(GPA > 3.8 && extracurricularActivities){
    console.log("Full Scholarship Offered!");
}
else if(GPA >= 3.5 && GPA <= 3.8 && academicRecord){
    console.log("Partial Scholarship Offered.");
}
else if(GPA >= 3.0 && GPA < 3.5 && finanacialNeed){
    console.log("Considered for Financial Aid.");
}
else{
    console.log("Application Rejected!");
}