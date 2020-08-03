
// Hide values
$(document).ready(function(){
  $("#ans").hide();
  $("#check").hide();
});

// function to show Correct

function correct() {
  $("#checkans").show();
  $("#checkans").text("Correct");
  $("#checkans").css({'color': '#db03fc'});
  var tom1 = new Audio("sounds/Correct-answer.mp3");
  tom1.play();
}
// function to show wrong
function wrong() {
  $("#checkans").show();
  $("#checkans").text("Wrong");
  $("#checkans").css({'color': '#9d2503'});
  var crash = new Audio("sounds/Wrong-answer-sound-effect.mp3");
  crash.play();
}
// On Add button click
  $("#add").click(function(){
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
    $("#check").click(function(){
      ans = document.getElementById("ans").value;
      if ((randomNumber1+randomNumber2) == parseInt(ans)){
          correct();
        } else {
          wrong();
      }
    });

  });

  // On Substraction button click
    $("#minus").click(function(){
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
      $("#check").click(function(){
        ans = document.getElementById("ans").value;
        if ((randomNumber1-randomNumber2) == parseInt(ans)){
            correct();
          } else {
            wrong();
        }
      });
    } else {
		reset;
	}
	});

    // On Multiply button click
      $("#multiply").click(function(){
        var randomNumber1 = Math.floor(Math.random() * 11);
        var randomNumber2 = Math.floor(Math.random() * 11);
        $("#num1").text(randomNumber1);
        $("#num2").text(randomNumber2);
        $("#opt").text("x");
        $("#eql").text("=");
        $("h3").show();
        $("#ans").show();
        $("#check").show();
        $("#ans").val("");
        $("#checkans").hide();
        $("#check").click(function(){
          ans = document.getElementById("ans").value;
          if ((randomNumber1*randomNumber2) == parseInt(ans)){
              correct();
            } else {
              wrong();
          }
        });
      });

      // On Divide button click
        $("#divide").click(function(){
          var randomNumber1 = Math.floor(Math.random() * 101);
          var randomNumber2 = Math.floor(Math.random() * 11);
		if (randomNumber1 > randomNumber2 && randomNumber1 % randomNumber2 == 0){
          $("#num1").text(randomNumber1);
          $("#num2").text(randomNumber2);
          $("#opt").text("÷");
          $("#eql").text("=");
          $("h3").show();
          $("#ans").show();
          $("#check").show();
          $("#ans").val("");
          $("#checkans").hide();
          $("#check").click(function(){
            ans = document.getElementById("ans").value;
            if ((randomNumber1/randomNumber2).toFixed(2) == parseFloat(ans)){
                correct();
              } else {
                wrong();
            }
          });
		} else {
			reset;
		}
        });
