//variables to store the location and pet chosen by the user

const activity = alert("where would you like to do? type 1 to go for a car ride, 2 for a walk, 3 for a bath");
const animal = alert("who are you taking? 1 for Dee, 2 for Dennis, 3 for Mac, or 4 for Artie");

//function will take a location and an animal. Return the animal's reaction to the chosen location

function goAdv(loc, pet) {
    if (loc === 1 && pet === 1){
        return ("Response")
    } else if (loc === 1 && pet === 2){
        return ("Response 2")
    } else if (loc === 1 && pet === 3){
        return ("Response 3")
    } else if (loc === 1 && pet === 4){
        return ("Response 4")  
    } else if (loc === 2 && pet === 1){
        return ("Response 5")  
    } else if (loc === 2 && pet === 2){
        return ("Response 6")  
    } else if (loc === 2 && pet === 3){
        return ("Response 7")  
    } else if (loc === 2 && pet === 4){
        return ("Response 8")  
    } else if (loc === 3 && pet === 1){
        return ("Response 9")  
    } else if (loc === 3 && pet === 2){
        return ("Response 10")  
    } else if (loc === 3 && pet === 3){
        return ("Response 11")  
    } else if (loc === 3 && pet === 4){
        return ("Response 12")  
    } else if (loc === 4 && pet === 1){
        return ("Response 13")  
    } else if (loc === 4 && pet === 2){
        return ("Response 14")  
    } else if (loc === 4 && pet === 3){
        return ("Response 15")  
    } else if (loc === 4 && pet === 4){
        return ("Response 16")  
    } else {
        return "please make a valid selection for activity and pet"
    }
}