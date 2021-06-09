// Hide values
$(document).ready(function() {
  $("#ans").hide();
  $("#check").hide();
  $("#quotient").hide();
  $("#check2").hide();
  $("#remainder").hide();
});

// function to show correct and wrong
function playSound(keyName) {
  switch (keyName) {
    case "c":
      $("#checkans").show();
      $("#checkans").text("Correct");
      $("#checkans").css({
        'color': '#db03fc'
      });
      //var tom1 = new Audio("sounds/Correct-answer.mp3");
      //tom1.play();
      break;
    case "w":
      $("#checkans").show();
      $("#checkans").text("Wrong");
      $("#checkans").css({
        'color': '#9d2503'
      });
      //var crash = new Audio("sounds/Wrong-answer-sound-effect.mp3");
      //crash.play();
      break;
    default:


  }
}

// On Add button click
$("#add").click(function() {
  var randomNumber1 = Math.floor(Math.random() * 4001);
  var randomNumber2 = Math.floor(Math.random() * 4001);
  $("#num1").text(randomNumber1);
  $("#num2").text(randomNumber2);
  $("#opt").text("+");
  $("#eql").text("=");
  $("h3").show();
  $("#ans").show();
  $("#check").show();
  $("#ans").val("");
  $("#checkans").hide();
  $("#quotient").hide();
  $("#check2").hide();
  $("#remainder").hide();
  $("#check").click(function() {
    ans = document.getElementById("ans").value;
    if ((randomNumber1 + randomNumber2) == parseInt(ans)) {
      playSound("c");
    } else {
      playSound("w");
    }
  });

});

// On Substraction button click
$("#minus").click(function() {
  var randomNumber1 = Math.floor(Math.random() * 4001);
  var randomNumber2 = Math.floor(Math.random() * 4000);
  if (randomNumber1 > randomNumber2) {
    $("#num1").text(randomNumber1);
    $("#num2").text(randomNumber2);
    $("#opt").text("-");
    $("#eql").text("=");
    $("h3").show();
    $("#ans").show();
    $("#check").show();
    $("#ans").val("");
    $("#checkans").hide();
	$("#quotient").hide();
    $("#check2").hide();
    $("#remainder").hide();
    $("#check").click(function() {
      ans = document.getElementById("ans").value;
      if ((randomNumber1 - randomNumber2) == parseInt(ans)) {
        playSound("c");
      } else {
        playSound("w");
      }
    });
  } else {
    reset;
  }
});

// On Multiply button click
$("#multiply").click(function() {
  var randomNumber1 = Math.floor(Math.random() * 201);
  var randomNumber2 = Math.floor(Math.random() * 41);
  $("#num1").text(randomNumber1);
  $("#num2").text(randomNumber2);
  $("#opt").text("x");
  $("#eql").text("=");
  $("h3").show();
  $("#ans").show();
  $("#check").show();
  $("#ans").val("");
  $("#checkans").hide();
  $("#quotient").hide();
  $("#check2").hide();
  $("#remainder").hide();
  $("#check").click(function() {
    ans = document.getElementById("ans").value;
    if ((randomNumber1 * randomNumber2) == parseInt(ans)) {
      playSound("c");
    } else {
      playSound("w");
    }
  });
});

// On Divide button click
$("#divide").click(function() {
  var randomNumber1 = Math.floor(Math.random() * 101);
  var randomNumber2 = Math.floor(Math.random() * 21);
  if (randomNumber1 > randomNumber2 && randomNumber2 !=0) {
    $("#num1").text(randomNumber1);
    $("#num2").text(randomNumber2);
    $("#opt").text("÷");
    $("#eql").text("=");
    $("h3").show();
    $("#quotient").show();
	$("#remainder").show();
    $("#check2").show();
	$("#check").hide();
	$("#ans").hide();
    $("#quotient").val("");
	$("#remainder").val("");
    $("#checkans").hide();
    $("#check2").click(function() {
      quotient = document.getElementById("quotient").value;
	  remainder = document.getElementById("remainder").value;
      if (Math.trunc((randomNumber1 / randomNumber2)) == parseInt(quotient)
		  && (randomNumber1 % randomNumber2) == remainder) {
        playSound("c");
      } else {
        playSound("w");
      }
    });
  } else {
    reset;
  }
});
