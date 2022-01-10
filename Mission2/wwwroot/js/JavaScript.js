// "Use jQuery selectors(i.e.the “$”) in your program"

$("#btnCal").click(function () {

    var score = Number($("#txtAssignment").val()) + Number($("#txtGroupProject").val()) + Number($("#txtQuizzes").val()) + Number($("#txtExams").val()) + Number($("#txtIntex").val())

    if (!($("#txtAssignment").val() && $("#txtGroupProject").val() && $("#txtQuizzes").val() && $("#txtExams").val()) ) {
        alert("It is blank! Please Enter your score!");
        return false;
    }

    if (score >= 94 && score <= 100) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is A"
        );
    }
    else if (score >= 90 && score <= 94) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is A-"
        );
    }
    else if (score >= 87 && score <= 90) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is B+"
        );
    }
    else if (score >= 84 && score <= 87) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is B"
        );
    }
    else if (score >= 80 && score <= 84) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is B-"
        );
    }
    else if (score >= 77 && score <= 80) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is C+"
        );
    }
    else if (score >= 74 && score <= 77) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is C"
        );
    }
    else if (score >= 70 && score <= 74) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is C-"
        );
    }
    else if (score >= 67 && score <= 70) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is D+"
        );
    }
    else if (score >= 64 && score <= 67) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is D"
        );
    }
    else if (score >= 60 && score <= 64) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is D-"
        );
    }
    else if (score < 60 && score >= 0) {
        alert("Your Score Percentage is "
            + score + "%. \n" +
            "Your Grade is E"
        );
    }
    else {
        alert("Your Input: " + score + " is out of (0-100) or not a number. Please retype it again!")
    }

    $("#picShaun").fadeToggle();
    $("#picEnjoy").fadeToggle();
})

$('#txtAssignment').on('input', function () {

    var value = $("#txtAssignment").val();
    $(this).val(Math.max(Math.min(value, 55), 0));

});

$('#txtGroupProject').on('input', function () {

    var value = $("#txtGroupProject").val();
    $(this).val(Math.max(Math.min(value, 5), 0));

});

$('#txtQuizzes').on('input', function () {

    var value = $("#txtQuizzes").val();
    $(this).val(Math.max(Math.min(value, 10), 0));

});

$('#txtExams').on('input', function () {

    var value = $("#txtExams").val();
    $(this).val(Math.max(Math.min(value, 20), 0));

});

$('#txtIntex').on('input', function () {

    var value = $("#txtIntex").val();
    $(this).val(Math.max(Math.min(value, 10), 0));

});