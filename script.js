$(document).ready(function () {
  var time = 1;
  var duration = moment.duration(time * 1000, "milliseconds");
  var interval = 1000;
  var score = 0;
  $("#timer").click(function () {
    console.log("this worked");

    setInterval(function () {
      duration = moment.duration(
        duration.asMilliseconds() - interval,
        "milliseconds"
      );
      $("#countdown").text(moment(duration.asMilliseconds()).format("h:mm:ss"));
    }, 1);

    $(".first").removeClass("d-block").addClass("d-none");
    $(".second").removeClass("d-none").addClass("d-block");
  });

  $(".second button").click(function (buttonClicked) {
    if ($(buttonClicked.target).hasClass('answer1')) {
      $(".second #points").text("correct");
      console.log("correct");
      score++;
      console.log(score)
    } else {
        console.log("wrong")
      $(".second #points").text("Wrong");
    }
    setTimeout(() => {
      $(".third").removeClass("d-none").addClass("d-block");
      $(".second").removeClass("d-block").addClass("d-none");
    }, 1500);
  });

  $(".third button").click(function (buttonClicked) {
    if ($(buttonClicked.target).hasClass("answer2")) {
      $(".third #points").text("correct");
      console.log("correct");
      score++;
      console.log(score)
    } else {
      $(".third #points").text("Wrong");
    }
    setTimeout(() => {
      $(".fourth").removeClass("d-none").addClass("d-block");
      $(".third").removeClass("d-block").addClass("d-none");
    }, 1500);
  });
  $(".fourth button").click(function (buttonClicked) {
    if ($(buttonClicked.target).hasClass("answer3")) {
      $(".fourth #points").text("correct");
      console.log("correct");
      score++;
      console.log(score)
    } else {
      $(".fourth #points").text("Wrong");
    }
    setTimeout(() => {
      $(".fifth").removeClass("d-none").addClass("d-block");
      $(".fourth").removeClass("d-block").addClass("d-none");
    }, 1500);
  });
  $(".fifth button").click(function (buttonClicked) {
    if ($(buttonClicked.target).hasClass("answer4")) {
      $(".fifth #points").text("correct");
      console.log("correct");
      score++;
      console.log(score)
    } else {
      $(".fifth #points").text("Wrong");
    }
    setTimeout(() => {
      $(".sixth").removeClass("d-none").addClass("d-block");
      $(".fifth").removeClass("d-block").addClass("d-none");
    }, 1500);
  });
  $(".sixth button").click(function (buttonClicked) {
    if ($(buttonClicked.target).hasClass("answer5")) {
      $(".sixth #points").text("correct");
      console.log("correct");
      score++;
      console.log(score)
    } else {
      $(".sixth #points").text("Wrong");
    }
    setTimeout(() => {
      $(".last").removeClass("d-none").addClass("d-block");
      $(".sixth").removeClass("d-block").addClass("d-none");
      $(".score").text("Score " + score + "0")
    }, 1500);
  });
});
