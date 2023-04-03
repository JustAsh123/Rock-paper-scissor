function rps(user_choice){
    comp_choice = Math.random();
    comp_choice = num_to_choice(comp_choice);
    user_choice = num_to_choice(user_choice);
    console.log(user_choice, comp_choice);
    document.getElementById("user_choice").innerHTML = user_choice;
    document.getElementById("comp_choice").innerHTML = comp_choice;
    show_on_screen(user_choice,comp_choice);
}

function num_to_choice(num){
    if (num >= 0 && num <= 1/3){
        return("rock");
    } else if (num >= 1/3 && num <= 2/3){
        return("paper");
    }else if (num >= 2/3 && num <= 1){
        return("scissor");
    }
}

function is_win(user, comp){
    if (user=="rock" && comp=="paper"){
        console.log("lose");
        return "lose";
    } else if(user=="rock" && comp=="scissor"){
        console.log("win");
        return "win";
    } else if(user=="paper" && comp=="scissor"){
        console.log("lose");
        return "lose";
    }else if(user=="paper" && comp=="rock"){
        console.log("win");
        return "win";
    }else if(user=="scissor" && comp=="rock"){
        console.log("lose");
        return "lose";
    }
    else if(user=="scissor" && comp=="paper"){
        console.log("win");
        return "win";
    } else{
        console.log("draw");
        return "draw";
    }
}

function show_on_screen(user, comp){
    is_winning = is_win(user,comp);
    if (is_winning == "win"){
        document.getElementById("result").innerHTML = "You Win!"
    } else if (is_winning == "lose"){
        document.getElementById("result").innerHTML = "You Lose!"
    }else{
        document.getElementById("result").innerHTML = "Draw!"
    }
}