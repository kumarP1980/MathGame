// Hide values
$(document).ready(function(){
  $("#ans").hide();
  $("#check").hide();
});

// On Add button click
  $("#add").click(function(){
    var randomNumber1 = Math.floor(Math.random() * 31);
    var randomNumber2 = Math.floor(Math.random() * 31);
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
        $("#checkans").show();
        $("#checkans").text("Correct");
        $("#checkans").css({'color': '#db03fc'});
        } else {
          $("#checkans").show();
        $("#checkans").text("Wrong");
        $("#checkans").css({'color': '#9d2503'});
      }
    });
  });

  // On Substraction button click
    $("#minus").click(function(){
      var randomNumber1 = Math.floor(Math.random() * 21);
      var randomNumber2 = Math.floor(Math.random() * 11);
	  if(randomNumber1 > randomNumber2){
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
          $("#checkans").show();
          $("#checkans").text("Correct");
          $("#checkans").css({'color': '#db03fc'});
          } else {
            $("#checkans").show();
            $("#checkans").text("Wrong");
            $("#checkans").css({'color': '#9d2503'});
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
            $("#checkans").show();
            $("#checkans").text("Correct");
            $("#checkans").css({'color': '#db03fc'});
            } else {
              $("#checkans").show();
              $("#checkans").text("Wrong");
              $("#checkans").css({'color': '#9d2503'});
          }
        });
      });

      // On Divide button click
        $("#divide").click(function(){
          var randomNumber1 = Math.floor(Math.random() * 61);
          var randomNumber2 = Math.floor(Math.random() * 7);
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
              $("#checkans").show();
              $("#checkans").text("Correct");
              $("#checkans").css({'color': '#db03fc'});
              } else {
                $("#checkans").show();
                $("#checkans").text("Wrong");
                $("#checkans").css({'color': '#9d2503'});
            }
          });
        });
