<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width,user-scalable=no">

    <title>BubbleShooter</title>
    <link rel="stylesheet" href="{{asset('games/bubble/css/styles.css')}}">
    <link rel="stylesheet" href="{{asset('games/bubble/css/game.css')}}">
</head>
<body>
    <div id=page>
        <div id="topbar">
          <h1 id=score></h1>
          <h1 id=timer></h1>
        </div>
<!--        <canvas id="game"></canvas>-->
        <div id="game">
            <div id="board">
                
            </div>
        </div>
        <div id="footer"></div>
    </div>
    
    <div id="start_game_dialog" class="dialog">
        <h2>Start a new Game</h2>
        <div id="new_game_button" class="button">
            New Game
        </div>
    </div>
    <script>
    var idea = "{{$id}}";
    var mainlink = "{{env('APP_URL','http://spl.games')}}save/data/";
    </script>
    <script src="{{asset('games/bubble/dist/app.js')}}"></script>
</body>
</html>