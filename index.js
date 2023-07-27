function generate_rand(){
    var rand_num = Math.floor((Math.random() * 6) + 1);
    return rand_num;
}


function player_1(){
    var value = generate_rand();
    return value;
}


function player_2(){
    var value = generate_rand();
    return value;
}


function check_if_bigger(val_1, val_2){
    if(val_1 > val_2){
        document.querySelector("h1").textContent = "Player 1 Won";
    }

    else if(val_1 < val_2){
        document.querySelector("h1").textContent = "Player 2 Won";
    }
    else{
        document.querySelector("h1").textContent = "Tie";
    }
}

function change_img(val_1, val_2){
    var src_1 = "./dice" + val_1 + ".png";
    var src_2 = "./dice" + val_2 + ".png";
    document.querySelectorAll("img")[0].setAttribute("src", src_1);
    document.querySelectorAll("img")[1].setAttribute("src", src_2);

}


function dice_play(){
    var val_1 = player_1();
    var val_2 = player_2();
    check_if_bigger(val_1, val_2);
    change_img(val_1, val_2);
}

document.querySelector("button").addEventListener("click", function(){
    dice_play();
});
