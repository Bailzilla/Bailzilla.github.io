

//function will display the animal's reaction to the chosen location

function goAdv() {

    //variables to store the location and pet chosen by the user

    let loc = prompt("what would you like to do? 1. go for a car ride, 2. go for a walk, 3. give a bath");
    let pet = prompt("which pet? 1. Dee, 2. Dennis, 3. Mac, 4. Artie");

    if (loc == 1 && pet == 1){
        alert ("Great choice! Sweet Dee loves going for a ride, just be sure to crack the window so she can feel the breeze")
    } else if (loc == 1 && pet == 2){
        alert ("As an ambulance siren goes by, Dennis begins to howl from the depth of his chest. Your ear drums are ratteld, but you ultimately walk away okay.")
    } else if (loc == 1 && pet == 3){
        alert ("Mac is cautiously excited. She paces back and forth from window to window in the backseat, absorbing everything that comes her way.")
    } else if (loc ==1 && pet == 4){
        alert ("Artie is NOT happy with you. At a red light she cralwls into your lap and goes to the bathroom :/")  
    } else if (loc == 2 && pet == 1){
        alert ("Dee howls uncontrollably as you strap on her lead. Away you go, hope you brought the right shoes!")  
    } else if (loc == 2 && pet == 2){
        alert ("Dennis smiles and stays by your side throughout the walk :)")  
    } else if (loc == 2 && pet == 3){
        alert ("Mac begins barking as soon as she sees you with her leash. Along the walk she zig-zags across the sidewalk, smelling everything in her path.")  
    } else if (loc == 2 && pet == 4){
        alert ("Artie may not do collars, but she is a willing follower in a walk around the block. She stalks 10 yards behind you, lurking from porch to porch.")  
    } else if (loc == 3 && pet == 1){
        alert ("Dee is scared. She hears the bath water, tucks her tail ebtween her legs, and hurries to the comfort of her kennel. Dennis begins to bark in her defense.")  
    } else if (loc == 3 && pet == 2){
        alert ("Dennis is hesitant at first, but he calms down once he feels the water. Good boy :)")  
    } else if (loc == 3 && pet == 3){
        alert ("Mac enjoys the feel of the water and is a trooper through the process.")  
    } else if (loc == 3 && pet == 4){
        alert ("Artie cleans herself, and is therefore above being bathed by a mere human. She uses her elusiveness to disapear.")  
    } else {
        alert ("please make a valid selection for activity and pet");
        goAdv();
    }
}