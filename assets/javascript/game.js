$(document).ready(function () {
    //set variables for wins and losses//

    var wins=0;
    var losses=0;
    var totalScore=0;
    $("#numberWins").text("Wins: " + wins);
    $("#numberLosses").text("Losses: " + losses);

    //randomNumber is the number shown at the start of the game//
    var randomNumber;

    //randomNumber is between 19-120//
    randomNumber = Math.floor(Math.random () * 101 +19);
    $("#computerNumber").text(randomNumber);

    //set variables for the value of each gem, which is between 1-12//
    var gem1= Math.floor(Math.random () * 11 + 1);
    var gem2= Math.floor(Math.random () * 11 + 1);
    var gem3= Math.floor(Math.random () * 11 + 1);
    var gem4= Math.floor(Math.random () * 11 + 1);
        
    

    // $("#numberWins").text(wins);
    // $("#numberLosses").text(losses);
    $("#userTotal").text(totalScore)

    //resetting the game, for random number and for the gem values//
    function reset() {
        randomNumber = Math.floor(Math.random () * 101 +19);
        $("#computerNumber").text(randomNumber);

        var gem1= Math.floor(Math.random () * 11 + 1);
        var gem2= Math.floor(Math.random () * 11 + 1);
        var gem3= Math.floor(Math.random () * 11 + 1);
        var gem4= Math.floor(Math.random () * 11 + 1);


        totalScore=0;
        $("#userTotal").text(totalScore);
    }

    //Adding wins to the total//
    function totalWins() {
        alert("You Won!!!");
        wins++;
        $("#numberWins").html("<p>Wins: " + wins + "</p>");
        reset();
    }

    //Adding losses to the total//
    function totalLosses() {
        alert("You lost...Boohoo");
        losses++;
        $("#numberLosses").html("<p>Losses: " + losses + "</p>");
        reset();
    }



    //Listening to gem clicks and tallying total score//

    $("#gem1").on("click", function () {
        totalScore = totalScore + gem1;
        $("#userTotal").text (totalScore);
            if (totalScore === randomNumber) {
                totalWins();
            }
            else if (totalScore > randomNumber) {
                totalLosses();
            }
    });

    $("#gem2").on("click", function () {
        totalScore = totalScore + gem2;
        $("#userTotal").text (totalScore);
            if (totalScore === randomNumber) {
                totalWins();
            }
            else if (totalScore > randomNumber) {
                totalLosses();
            }
    });

    $("#gem3").on("click", function () {
        totalScore = totalScore + gem3;
        $("#userTotal").text (totalScore);
            if (totalScore == randomNumber) {
                totalWins();
            }
            else if (totalScore > randomNumber) {
                totalLosses();
            }
    
    });

    $("#gem4").on("click", function () {
        totalScore = totalScore + gem4;
        $("#userTotal").text (totalScore);
            if (totalScore == randomNumber) {
                totalWins();
            }
            else if (totalScore > randomNumber) {
                totalLosses();
            }

    });

   

});
