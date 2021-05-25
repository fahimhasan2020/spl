
<!DOCTYPE html>
<html>
<head>
    <title>Baseball Game</title>
    <style type="text/css">
        body{
          background-color: lightgray;
        }
        #entire{
          background-color: white;
          width:690px;
          height: 420px;
          margin: auto;
          margin-top: 100px;
        }
        #logo{
          float:left;
          padding:10px;
        }
        #game{
          float:right;
          width: 250px;
          height: 400px;
          padding:10px;
        }
    </style>
</head>
<body>
    <div id="entire">
        <img id="logo" src="http://rlv.zcache.com/baseball_word_ball_logo_photo_statuette-r436daa66a3dc4b55b9b90203407d2e51_x7saw_8byvr_324.jpg" height="400" width="400"/>
        <div id="game">
            <input type="button" id="start" value="start game" />
            <span>Time :</span>
            <span id="timer">0</span>
            <input type="button" id="end" value="end game"/>
            <div id="gamePanel">
                <div id="guessField">
                    <p>guess: 
                    <input type="text" name="guess" value="" size="1" maxlength="1" />
                    <input type="text" name="guess" value="" size="1" maxlength="1" />
                    <input type="text" name="guess" value="" size="1" maxlength="1" />
                    <input type="button" id="try" value="try!" /></p>
                </div>
                <table border="1" summary="information board">
                    <caption>Information Board</caption>
                    <thead>
                        <tr>
                            <th>#Trial</th>
                            <th>Combination</th>
                            <th>Strike</th>
                            <th>Ball</th>
                        </tr>   
                    </thead>
                    <tbody>     
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.0.0.min.js" integrity="sha256-JmvOoLtYsmqlsWxa7mDSLMwa6dZ9rrIdtrrVYRnDRH0=" crossorigin="anonymous"></script>
    <script>
        /* variables */
        var isGameStarted = false;
        var targetList = [-1,-1,-1];
        var guessList = [];
        var attemptNum = 0;
        var t = null;
        var sec = 0;
        var trd = "<tr><td>";
        var tdd = "</td><td>";
        var tdr = "</td></tr>";
        var acc = "";

        $("#gamePanel").css("display", "none");

        /* Count : timer */
        function Count(){
            t = setTimeout(Count, 1000);
            sec++;
            $("#timer").html(sec);
        }

        /* start_handler : start the game. */
        $("#start").click(function(){
            if(isGameStarted){
                if(confirm("game in progress. do you want to start a new game?")){
                    clearTimeout(t);
                    init();
                } 
                else $("input[name='guess']")[0].select();
            }
            else{
                init();
            }
        });
        
        /* init : start a new game */
        function init(){
            /* reset variables */
            isGameStarted = true;
            targetList = [-1,-1,-1];
            guessList = [];
            attemptNum = 0;
            sec = 0;
            acc = "";
            $("tbody").empty();
            $("input[name='guess']").val("");
            $("#gamePanel").css("display", "block"); // show the game panel
            $("input[name='guess']")[0].select(); // set the focus to the first guess
            getRand(); // set the target combination
            Count(); // start the timer
        }

        /* getRand : produce a random 3 digit number (target) */
        function getRand(){
            targetList[0] = Math.ceil(Math.random() * 10) - 1;
            for(var i = 1; i <= 2; i++){
                while(1){
                    var temp = Math.ceil(Math.random() * 10) - 1;
                    if(temp != targetList[0] && temp != targetList[1] && temp != targetList[2]){
                        targetList[i] = temp;
                        break;
                    }
                }
            } 
        }

        /* try_handler : game operation */
        $("#try").click(function(){
            var strike = 0;
            var ball = 0;
            var a = $("input[name='guess']")[0].value;
            var b = $("input[name='guess']")[1].value;
            var c = $("input[name='guess']")[2].value;

            var isValid = input_check();

            if(isValid){
              guessList[attemptNum] = [a,b,c];
              attemptNum++;

              /* baseball game logic */
              for(var i=0; i<=2; i++){
                  for(var j=0; j<=2; j++){
                      if($("input[name='guess']")[i].value == targetList[j]){
                          if(i == j) strike++;
                          else ball++;
                          break;
                      }
                  }
              }
              /* print out the progress */
              var temp = trd + attemptNum + tdd + a + b + c + tdd + strike + tdd + ball + tdr;
              acc = acc + temp;
              $("tbody").html(acc);

              /* if correctly guessed */
              if(strike == 3){
                  clearTimeout(t);
                  if(confirm("congratuation! you have correctly guessed " + a + " " + b + " " + c + " in " + attemptNum + " attempts. do you want to start a new game?")) init();
                  else $("#gamePanel").css("display", "none");
              }

                /* if a user used up all the attempts */
                else if(attemptNum == 10){
                    clearTimeout(t);
                    if(confirm("game over! you have reached max number of attempts. the answer was " + targetList[0] + " " + targetList[1] + " " + targetList[2] + ". do you want to start a new game?")) init();
                    else{
                      $("#gamePanel").css("display", "none");
                      sec=0;
                      $("#timer").html(sec);
                    } 
                }

                /* if time out */
                else if(sec >= 999){
                  clearTimeout(t);
                  if(confirm("time out! it's taking too long. do you want to start a new game?")) init();
                  else{
                      gamePanel.style.display="none";
                      sec=0;
                      $("#timer").html(sec);
                    } 
                }

                $("input[name='guess']").val("");
                $("input[name='guess']")[0].select();
            }
        });

        /* input_check : check the validity of input */
        function input_check(){
            var a = $("input[name='guess']")[0].value;
            var b = $("input[name='guess']")[1].value;
            var c = $("input[name='guess']")[2].value;
            var isValid = true;

            /* if inputs are not numbers */
            if(!Number.isInteger(parseInt(a)) || !Number.isInteger(parseInt(b)) || !Number.isInteger(parseInt(c))){
                alert("input must be numbers");
                isValid = false;
            }

            /* if there are missing input */
            else if(a == "" || b == "" || c == ""){
                alert("you have to guess all 3 digits");
                isValid = false;
            }

            /* if input numbers are not distinct */
            else if(a == b || a == c|| b == c){
                alert("input numbers should be distinct");
                isValid = false;
            }
  
            /* if input numbers are out of range */
            else if(a > 9 || a < 0 || b > 9 || b < 0 || c > 9 || c < 0){
                alert("input numbers should be between 0 and 9");
                isValid = false;
            }
            
            /* if the user already guessed input */
            else {
                for(x in guessList){
                    if(guessList[x][0] == a && guessList[x][1] == b && guessList[x][2] == c){
                        alert("you already have tried that combination");
                        isValid = false;
                    }
                }
            }

            /* clear out the field if error occured */
            if(!isValid){
                $("input[name='guess']").val("");
                $("input[name='guess']")[0].select();
            }

            return isValid;
        }

        /* end_handler : end game */
        $("#end").click(function(){
            if(isGameStarted){
                if(confirm("game in progress. do you want to end current game?")){
                    clearTimeout(t);
                    $("#gamePanel").css("display", "none"); // hide game panel until start
                    isGameStarted = false;
                    sec=0;
                    $("#timer").html(sec);  
                } 
                else $("input[name='guess']")[0].select();
            }
        });

        /* cursor move event */
        $("input[name='guess']")[0].onkeyup = function(e){ $("input[name='guess']")[1].select(); }
        $("input[name='guess']")[1].onkeyup = function(e){ $("input[name='guess']")[2].select(); }
        
    </script>
</body>
</html>