let pNum1;
let pNum2;
let pNum3;
let pNum4;
let dNum1;
let dNum2;
let dNum3;
let used = [];
let newPlayerNum;
let newDealerNum;
let dealerLock = false;
let playerLock = false;

// checks color values of object so css rules are applied to it
colorCheck = (card, num) => {
    if(deck[num].color === "red"){
        card.className = "red"
    } else if(deck[num].color === "black"){
        card.className = "black"
    }
}

// checks if number is duplicate so same card can't pop up twice
function dupeCheck() {
    let num = Math.floor(Math.random() * 53);
    while (used.includes(num)) {
      num = Math.floor(Math.random() * 53);
    }
    used.push(num);
    return num;
  }

function dealerHit(){
    if(newDealerNum >= 17 && !dealerLock){
        dealerLock === true
    } else if(newDealerNum < 17 && !dealerLock){
        dNum3 = dupeCheck();
        dCard3.textContent = deck[dNum3].name;
        newDealerNum += deck[dNum3].value;
        colorCheck(dCard3, dNum3);
        dCard3.setAttribute("id", "dealersCards");
        dealer.append(dCard3);
        dealerLock === true
    }
}

play.addEventListener("click", function(){
    //Makes hit and stand buttons become visible and play invisible
    hit.style.display = "inline";
    stand.style.display = "inline";
    play.style.display = "none";

    //sets the first card for the player
    //start of player deck code
    playerNum.style.display = 'block';
    pNum1 = Math.floor(Math.random() * 53);
    used.push[pNum1];
    pCard1.textContent = deck[pNum1].name;
    newPlayerNum = deck[pNum1].value;
    colorCheck(pCard1, pNum1);
    player.append(pCard1);

    pNum2 = dupeCheck();
    pCard2.textContent = deck[pNum2].name;
    newPlayerNum += deck[pNum2].value;
    colorCheck(pCard2, pNum2);
    player.append(pCard2);

    playerNum.textContent = newPlayerNum;
    //end of player deck code

    //start of dealer deck code
    dNum1 = dupeCheck();
    dCard1.textContent = deck[dNum1].name;
    newDealerNum = deck[dNum1].value;
    colorCheck(dCard1, dNum1);
    dCard1.setAttribute("id", "dealersCards");
    dealer.append(dCard1);

    dNum2 = dupeCheck();
    dCard2.textContent = deck[dNum2].name;
    newDealerNum += deck[dNum2].value;
    colorCheck(dCard2, dNum2);
    dCard2.setAttribute("id", "dealersCards");
    dealer.append(dCard2);
    
})

hit.addEventListener("click", function(){
    dealerHit();

    if(!playerLock && newPlayerNum < 21){
        pNum3 = dupeCheck();
        pCard3.textContent = deck[pNum3].name;
        newPlayerNum += deck[pNum3].value;
        colorCheck(pCard3, pNum3);
        player.append(pCard3);
    
        playerNum.textContent = newPlayerNum;
        playerLock = true;
    } else if(newPlayerNum < 21){
        pNum4 = dupeCheck();
        pCard4.textContent = deck[pNum4].name;
        newPlayerNum += deck[pNum4].value;
        colorCheck(pCard4, pNum4);
        player.append(pCard4);
    
        playerNum.textContent = newPlayerNum;
    } else{
        title.textContent = "YOU LOST!"
    }
})


stand.addEventListener("click", function(){

    dealerNum.textContent = newDealerNum;
    dealerNum.style.display = 'block';
    dCard1.setAttribute("id", "dealersCards1");
    dCard2.setAttribute("id", "dealersCards1");
    dCard3.setAttribute("id", "dealersCards1");

    if(newPlayerNum > 21){
        title.textContent = "YOU LOST!"
        console.log('Loser')
    } else if (newPlayerNum === 21){
        title.textContent = "BLACKJACK!"
        console.log("BLACKJACK!")
    } else if(newPlayerNum > newDealerNum){
        title.textContent = "YOU WON!"
        console.log("YOU WON!")
    } else if(newDealerNum > newPlayerNum){
        title.textContent = "YOU LOST!"
        console.log('Loser')
    } else if(newDealerNum === newPlayerNum){
        title.textContent = "TIE!"
        console.log("A Tie??")
    }
})