// Complex Access Control System


let clearanceLevel = 3;
let isVIP = "yes"

const entryPoints = {
    A: 3,
    B: 4,
    C: 5
}


if((clearanceLevel >= entryPoints.A) || (isVIP === "yes")){
    console.log("You have access to Entry Point A");
}
else{
    console.log("You do not have access to Entry Point A");
}

if((clearanceLevel >= entryPoints.B) || (isVIP === "yes")){
    console.log("You have access to Entry Point B");
}
else{
    console.log("You do not have access to Entry Point B");
}

if(clearanceLevel === entryPoints.C|| (isVIP === "yes")){
    console.log("You have access to Entry Point C");
}
else{
    console.log("You do not have access to Entry Point C");
}
