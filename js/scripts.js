$(document).ready(function() {
$("#JS").hide();
$("#Oop").hide();
  $("#submit").click(function(){
    $("#JS").show();
    $("#webbased").hide();
    $("#Oop").hide();
  });

  $("#submit2").click(function(){
    $("#JS").hide();
    $("#webbased").hide();
    $("#Oop").show();
  });

  var result = 0;

  $("#submit").click(function(event) {
    event.preventDefault();
    var mean = 0;
    var answer1 = parseInt($('input[name=answer1]:checked').val());
    var answer2 = parseInt($('input[name=answer2]:checked').val());
    var answer3 = parseInt($('input[name=answer3]:checked').val());
    var answer4 = parseInt($('input[name=answer4]:checked').val());
    var answers = [answer1,answer2,answer3,answer4];
    console.log(answer1,answer2,answer3,answer4);
    answers.forEach(function(answer) {
      if(answer === 5) {
        mean +=10;
      }
      })
      alert(mean + "out of 40");
      result+=mean;
    })

    $("#submit2").click(function(event) {
      event.preventDefault();
      var total = 0;
      var javascript1 = parseInt($('input[name=javascript1]:checked').val());
      var javascript2 = parseInt($('input[name=javascript2]:checked').val());
      var javascript3 = parseInt($('input[name=javascript3]:checked').val());
      var javascript = [javascript1,javascript2,javascript3];
      console.log(javascript1,javascript2,javascript3);
      javascript.forEach(function(answer) {
        if(answer === 5) {
          total +=10;
        }
        })
        alert(total + "out of 30");
        result+=total;
      })
      $("#submit3").click(function(event) {
        event.preventDefault();
        var sum = 0;
        var question1 = parseInt($('input[name=question1]:checked').val());
        var question2 = parseInt($('input[name=question2]:checked').val());
        var question3 = parseInt($('input[name=question3]:checked').val());
        var question4 = parseInt($('input[name=question4]:checked').val());
        var question = [question1,question2,question3,question4];
        console.log(question1,question2,question3,question4);
        question.forEach(function(answer) {
          if(answer === 5) {
            sum +=10;
          }
          })
          alert(sum + "out of 40");
          result+=sum;
          $("#scoreboard").text(result);
        })

        // document.getElementById('scoreboard').innerHTML = result;

  });


// $("#next").click(function() {
//   $(".html").hide();
//   $(".js").show();
// });
// (document).ready(function() {
//  $("#html").submit(function(event) {
//
// var answer1 = parseInt($('input[answer1]:checked').val());
// $(document).ready(function() {
//   $(".next").click(function() {
//     $(".html").toggle();
//     $(".js").toggle();
//   });
// });
// var answer2 = parseInt($('input[answer2]:checked').val());
// var answer3 = parseInt($('input[answer3]:checked').val());
// var answer4 = parseInt($('input[answer4]:checked').val());
//
//
// if((answer1=="" || answer2=="" || answer3=="" || answer4=="") || (answer1=="" && answer2=="" && answer3=="" && answer4=="")){
//  incomplete_works.innerHTML = "Some question(s) NOT completed! Atempt all Questions";
//  event.preventDefault();
// }else {
//
//   var submit = answer1 + answer2 + answer3 + answer4 ;
//   $("#html").toggle();
//   $("#JS").toggle();
//   yourResult.innerHTML = scoreboard ;
//   event.preventDefault();
// }
//  });
// });
// var oTurn = $("#flipbook").turn({
//     width: 400,
//     height: 300,
//     autoCenter: true,
//     next:true
// });
//
// $("#prev").click(function(e){
//     e.preventDefault();
//     oTurn.turn("previous");
// });
//
// $("#next").click(function(e){
//     e.preventDefault();
//     oTurn.turn("next");
// });
