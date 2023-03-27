let isRaining = prompt("Is it raining? Enter true or false.").toLowerCase();

if(isRaining === "true"){
    alert("Bring an umbrella");
}
else if(isRaining === "false"){
    alert("Leave the umbrella at home");
}
else{
    alert("Invalid input");
}