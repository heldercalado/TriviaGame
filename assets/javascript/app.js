var time = 100;
var clockRunning = false;
var counter = 0;
var intervalId;

var myArr = {
    q1: {
        question: "What is the top rated movie of all time according to IMDB?",
        answers: ["The Shawnshank Redemption ", "Rocky", "Angry Men", "The GodFather"]
    },
    q2: {
        question: "Who Directed the Movie Schindler's List?",
        answers: ["Steven Spielberg", "Martin Scorsese", "Quentin Tarantino", "Alfred Hitchcock"]
    },
    q3: {
        question: "Who was the main actor of Avatar",
        answers: ["Stephen Lang", "Sam Worthington", "Will Smith", "Laz Alonso"]
    },
    q4: {
        question: "The famous quote '1.21 Gigawatts!!!!!!' comes from the movie ...",
        answers: ["Back to the Future", "Spaceballs", "Pulp Fiction", "Once Upon the Time in Mexico"]
    },
    q5: {
        question: "Which 1997 science fiction movie starring Will Smith and Tommy Lee Jones tells the story of a secret agency that polices alien refugees who are living on earth disguised as humans?",
        answers: ["Man in Black", "Flashdance", "Wild Wild West", "Batman"]
    },
    q6: {
        question: "Which english actor won the 2014 Academy Award for best actor for his role in 'The Theory of everthing'",
        answers: ["Eddie Redmayne", "Tom Hanks", "Dwayne Johnson", "Robert Deniro"]
    },
    q7: {
        question: "Which classic thriller movie stars Roy Schieder as the police chief Martin Brody?",
        answers: ["Jaws", "Psycho", "The Silence of the Lambs", "Seven"],
    },
    q8: {
        question: "Who played Jack Dawnson in the 1997 epic Titanic",
        answers: ["Leonardo DiCaprio", "Chris Tucker", "Bruce Willis", "Samuel L Jackson"]
    },
    q9: {
        question: "In which year were the Academy Awards , or Oscars , first presented",
        answers: ["1929", "1935", "1940", "1942"]
    },
    q10: {
        question: "Judy Garland starred as Dorothy Gale in which classic movie",
        answers: ["The Wizard of Oz", "The yellow brick road", "the big bad wizzy", "Dark Rise"]
    },
}


function count() {

    // DONE: increment time by 1, remember we cant use "this" here.
    time--;
    if (time < 1) {


        $("#display").text("Time is Up!");
        $("#btn").prop('value', "Start Timer");
        //.prop('value', "Start Timer"); 

        stop();


    }
    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = timeConverter(time);


    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#display").text(converted);
}

function start() {


    // DONE: Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
        intervalId = setInterval(count, 1000);
        clockRunning = true;
        $("#btn").attr('value', 'Stop Timer');
    }
}

function stop() {

    // DONE: Use clearInterval to stop the count here and set the clock to not be running.

    $("#btn").attr('value', 'Start Timer');
    clearInterval(intervalId);
    clockRunning = false;

}

function reset() {




    // DONE: Change the "display" div to "00:00."
    $("#btn").attr('value', 'Start Timer');

    $("#display").text("00:00");
    time = 100;

}

function loadQuestions(argArray) {
    var newArray = []
    for (var key in argArray) {
        newArray.push(argArray[key]);
    }
    console.log("load questions functions started");

    for (var i = 0; i < newArray.length; i++) {

        var tempHeaderName = "#q" + (i + 1);
        $(tempHeaderName).text(newArray[i].question);
        for (var j = 0; j < 4; j++) {
            var tempLabelName = "label[for=q" + (i + 1) + "o" + (j + 1) + "]";
            console.log(tempLabelName);
            $(tempLabelName).html(newArray[i].answers[j]);
        }
    }
}

function timeConverter(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}

$(document).ready(function () {
    // $('label[for=q1o1]').html(myArr.q1.answers[0]);
    loadQuestions(myArr);
    $("#btn").on("click", function () {

        if ($("#btn").val() === "Start Timer") {
            console.log("started");
            start();
        } else {
            console.log("stopped");
            stop();
            reset();
        }

    });



});