//variables to store the location and pet chosen by the user

const activity = prompt("where would you like to do? type 1 to go for a car ride, 2 for a walk, 3 for a bath");
const animal = prompt("who are you taking? 1 for Dee, 2 for Dennis, 3 for Mac, or 4 for Artie");

//function will take a location and an animal. Return the animal's reaction to the chosen location

function goAdv(loc, pet) {
    if (loc === 1 && pet === 1){
        return ("Great choice! Sweet Dee loves going for a ride, just be sure to crack the window so she can feel the breeze :)")
    } else if (loc === 1 && pet === 2){
        return ("As an ambulance siren goes by, Dennis begins to howl from the depth of his chest. Your ear drums are ratteld, but you ultimately walk away okay.")
    } else if (loc === 1 && pet === 3){
        return ("Mac is cautiously excited. She paces back and forth from window to window in the backseat, absorbing everything that comes her way.")
    } else if (loc === 1 && pet === 4){
        return ("Artie is NOT happy with you. At a red light she cralwls into your lap and goes to the bathroom :/")  
    } else if (loc === 2 && pet === 1){
        return ("Dee howls uncontrollably as you strap on her lead. Away you go, hope you brought the right shoes!")  
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