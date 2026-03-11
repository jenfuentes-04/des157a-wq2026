(function(){
    'use strict'
    console.log('reading JS');

    // select game elements
    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
    const score = document.querySelector('#score');
    const actionArea = document.querySelector('#actions');

    // game data object storing all game state
    const gameData = {
        dice: ['dice-1.png', 'dice-2.png', 'dice-3.png', 
                'dice-4.png', 'dice-5.png', 'dice-6.png'],
        players: ['Deer', 'Bunny'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    // show player picker when start game is clicked
    startGame.addEventListener('click', function () {
        document.querySelector('#playerpick').classList.remove('hidden');
        startGame.classList.add('hidden');
    });

    // deer goes first if deer is picked
    document.querySelector('#pickdeer').addEventListener('click', function(){
        gameData.index = 0;
        beginGame();
    });

    // bunny goes first if bunny is picked
    document.querySelector('#pickbunny').addEventListener('click', function(){
        gameData.index = 1;
        beginGame();
    });

    // begin game, replace gamecontrol with game started message and quit button
    function beginGame() {
        gameControl.innerHTML = '<h2>The Game Has Started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';  

        // reload page if quit is clicked
        document.querySelector('#quit').addEventListener('click', function () {
            location.reload();
        });

        setUpTurn();
    } // end beginGame

    // set up each player's turn with a roll button
    function setUpTurn() {
        game.innerHTML = `<p>Time to forage, ${gameData.players[gameData.index]}!</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        
        // throw dice when roll button is clicked
        document.querySelector('#roll').addEventListener('click', function(){
            throwDice();
        });
    } // end setUpTurn

    // roll two dice and handle the result
    function throwDice() {
        actionArea.innerHTML = '';

        // generate two random dice rolls
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="images/${gameData.dice[gameData.roll1-1]}"> <img src="images/${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        // snake eyes - reset score to zero and switch player
        if( gameData.rollSum === 2){
            game.innerHTML += '<p class="error">Oh no! That mushroom was poisonous! Back to zero!</p>';
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            showCurrentScore();
            setTimeout(setUpTurn, 2000);

        // one was rolled - switch to other player
        } else if(gameData.roll1 === 1 || gameData.roll2 === 1) {
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p class="error">A twig snapped! Time to hide, switching to ${gameData.players[gameData.index]}!</p>`;
            setTimeout(setUpTurn, 2000);

        // good roll - add to score and show roll again or pass options
        } else {
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> <span id="or">or</span> <button id="pass">Pass</button>';

            // roll again if rollagain is clicked
            document.querySelector('#rollagain').addEventListener('click', function(){
                throwDice();
            });

            // switch to other player if pass is clicked
            document.querySelector('#pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }

    } // end throwDice

    // check if current player has reached 30 points to win
    function checkWinningCondition() {
        if (gameData.score[gameData.index] > gameData.gameEnd) {

            // display winning message with correct fruit for each player
            let fruit = gameData.index === 0 ? 'blueberries' : 'carrots';
            score.innerHTML = `<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} ${fruit}!</h2>`;

            actionArea.innerHTML = '';
            document.querySelector('#quit').innerHTML = 'Start a New Game?';
        } else {
            showCurrentScore();
        }
    } // end checkWinningCondition

    // update score display for both players
    function showCurrentScore() {
        document.querySelector('#deerscore').innerHTML = `Deer: ${gameData.score[0]}`;
        document.querySelector('#bunnyscore').innerHTML = `Bunny: ${gameData.score[1]}`;
    } // end showCurrentScore

    // modal - show and hide how to play instructions
   const modal = document.querySelector('#modal');
   const howToPlay = document.querySelector('#howtoplay');
   const closeModal = document.querySelector('#closemodal');
   
   howToPlay.addEventListener('click', function(){
        modal.classList.add('active');
   });

   closeModal.addEventListener('click', function(){
    modal.classList.remove('active');
   });

   // background music - starts on first click
   const bgMusic = new Audio('audio/magicalforest.mp3');
   bgMusic.loop = true;
   bgMusic.volume = 0.3;

   document.addEventListener('click', function startMusic(){
        bgMusic.play();
        document.removeEventListener('click', startMusic);
   });

   // button click sound effect - resets to start on each click
   const clickSound = new Audio('audio/sparkle.mp3');

   document.addEventListener('click', function(){
        clickSound.currentTime = 0;
        clickSound.volume = 0.2;
        clickSound.play();
   });

})();