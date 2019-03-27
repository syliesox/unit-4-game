$( document ).ready(function() {

//-----------VARIABLES

    // global variables
    var userTotal = 0;
    var wins = 0;
    var losses = 0;

    //Reports the number of wins and losses to the HTML doc
    $('#total').text(userTotal);
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    // Chooses a random number between 19 and 120
    var random = Math.floor(Math.random()*101+19);
    console.log(random);

    //Finds the 'random-number' in the html and reports the random number it chose
    $('#random-number').text(random);

    // Set up random numbers (1-12) to generate for each crystal
    var orangeCrystal = Math.floor(Math.random()*11+1);
    var purpleCrystal = Math.floor(Math.random()*11+1);
    var redCrystal = Math.floor(Math.random()*11+1);
    var yellowCrystal = Math.floor(Math.random()*11+1);
    console.log(orangeCrystal);
    console.log(purpleCrystal);
    console.log(redCrystal);
    console.log(yellowCrystal);


//-----------FUNCTIONS

    // Function to reset the game
    function reset() {
        random = Math.floor(Math.random()*101+19);
        $('#random-number').text(random);

        userTotal = 0;
        orangeCrystal = Math.floor(Math.random()*11+1);
        purpleCrystal = Math.floor(Math.random()*11+1);
        redCrystal = Math.floor(Math.random()*11+1);
        yellowCrystal = Math.floor(Math.random()*11+1);

        $('#total').text(userTotal);
        $('#numberWins').text(wins);
        $('#numberLosses').text(losses);
    }

    // updates wins
    function winner() {
        wins++;
        $('#numberWins').text(wins);
        reset();
        $('#message').text("You won!! :-) ");
    }

    // updates losses
    function loser() {
        losses++;
        $('#numberLosses').text(losses);
        reset();
        $('#message').text("You lost! :-( ");
    }

    // A function to set total and report win/loss status
    function isWinner(crystal) {
        userTotal += crystal;
        $('#total').text(userTotal);
            if (userTotal == random) {
                winner();
            } else if (userTotal > random) {
                loser();
            }
    }

    // Button set up for the crystals
    //Orange Crystal
    $('#orange').on('click', function() {
        isWinner(orangeCrystal);
    })

    //Purple Crystal
    $('#purple').on('click', function() {
        isWinner(purpleCrystal);
    })

    //Red Crystal
    $('#red').on('click', function() {
        isWinner(redCrystal);
    })

    //Yellow Crystal
    $('#yellow').on('click', function() {
        isWinner(yellowCrystal);
    })

})