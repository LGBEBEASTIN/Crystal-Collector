$(document).ready(function() {

    //Random Number 

    let random = [];

    for (var r = 10; r < 150; r++) {
        random.push(r);
    }

    //Crystal Number
    let crystal = [];

    for (let c = 1; c < 15; c++) {

        crystal.push(c);
    }

    let randomNum;
    let crystalNumbers = [];

    let c1;
    let c2;
    let c3;
    let c4;

    let totalScore = 0; //Score

    var wins = 0;
    var losses = 0;

    //Random Game Number
    function pickRandomNumber(arr) {

        let x = arr[Math.floor(Math.random() * arr.length)];
        randomNum = x;
        $("#randomNumber").html(randomNum);

        console.log("Random: " + randomNum);
    }

    //Random Crystal Numbers

    function pickRandomCrystals(arr) {

        for (let y = 0; y < 4; y++) {

            let a = arr[Math.floor(Math.random() * arr.length)];

            crystalNumbers.push(a);
        }

        console.log("Crystals: " + crystalNumbers);

    }

    function crystalValues(arr) {

        for (let i = 0; i < arr.length; i++) {

            $("#button-" + (i + 1)).attr("value", arr[i]);
            console.log(this);
        }
        c1 = arr[0];
        c2 = arr[1];
        c3 = arr[2];
        c4 = arr[3];
    }

    function gameReset(x) {

        crystalNumbers = [];

        pickRandomNumber(random);

        pickRandomCrystals(crystal);

        crystalValues(crystalNumbers);

        totalScore = 0;
        $("#totalNumber").html(totalScore);

        alert(x);
    }

    pickRandomNumber(random);
    pickRandomCrystals(crystal);
    crystalValues(crystalNumbers);

    $("#button-1").on("click", function() {

        totalScore += c1;
        $("#totalNumber").html(totalScore);
    });

    $("#button-2").on("click", function() {

        totalScore += c2;
        $("#totalNumber").html(totalScore);
    });

    $("#button-3").on("click", function() {

        totalScore += c3;
        $("#totalNumber").html(totalScore);
    });

    $("#button-4").on("click", function() {

        totalScore += c4;
        $("#totalNumber").html(totalScore);
    });

    $("button").on("click", function() {
        //Wins
        if (totalScore == randomNum) {

            wins++;
            console.log(totalScore);
            $("#totalNumber").html(totalScore);
            $("#wins").html("Wins: " + wins);


            setTimeout(function() { gameReset("You Win!") }, 200);
        } else if (totalScore > randomNum) {

            losses++;
            $("#totalNumber").html(totalScore);
            $("#losses").html("Losses: " + losses);

            setTimeout(function() { gameReset("You Lose!") }, 200);
        }
    });

});