// Hide values
$(document).ready(function(){
  $("#ans").hide();
  $("#check").hide();
});

// On Add button click
  $("#add").click(function(){
    var randomNumber1 = Math.floor(Math.random() * 101);
    var randomNumber2 = Math.floor(Math.random() * 101);
    $("#num1").text(randomNumber1);
    $("#num2").text(randomNumber2);
    $("#opt").text("+");
    $("#eql").text("=");
    $("h3").show();
    $("#ans").show();
    $("#check").show();
    $("#ans").val("");
    $("#check").click(function(){
      ans = document.getElementById("ans").value;
      if ((randomNumber1+randomNumber2) == parseInt(ans)){
        $("#checkans").text("Correct");
        $("#checkans").css({'color': '#52de97'});
        } else {
        $("#checkans").text("Wrong");
        $("#checkans").css({'color': '#9d2503'});
      }
    });
  });

  // On Substraction button click
    $("#minus").click(function(){
      var randomNumber1 = Math.floor(Math.random() * 101);
      var randomNumber2 = Math.floor(Math.random() * 100);
      $("#num1").text(randomNumber1);
      $("#num2").text(randomNumber2);
      $("#opt").text("-");
      $("#eql").text("=");
      $("h3").show();
      $("#ans").show();
      $("#check").show();
      $("#ans").val("");
      $("#check").click(function(){
        ans = document.getElementById("ans").value;
        if ((randomNumber1-randomNumber2) == parseInt(ans)){
          $("#checkans").text("Correct");
          $("#checkans").css({'color': '#52de97'});
          } else {
          $("#checkans").text("Wrong");
          $("#checkans").css({'color': '#9d2503'});
        }
      });
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
        $("#check").click(function(){
          ans = document.getElementById("ans").value;
          if ((randomNumber1*randomNumber2) == parseInt(ans)){
            $("#checkans").text("Correct");
            $("#checkans").css({'color': '#52de97'});
            } else {
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
          $("#check").click(function(){
            ans = document.getElementById("ans").value;
            if ((randomNumber1/randomNumber2) == parseInt(ans)){
              $("#checkans").text("Correct");
              $("#checkans").css({'color': '#52de97'});
              } else {
              $("#checkans").text("Wrong");
              $("#checkans").css({'color': '#9d2503'});
            }
          });
        });
