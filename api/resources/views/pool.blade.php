<!DOCTYPE html>
<html>

<head>
    <title>Billiard</title>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">

    <link rel="stylesheet" type="text/css" href="{{asset('games/pool/css/style.css')}}" />
    <script type="text/javascript" src="{{asset('games/pool/js/three.min.js')}}"></script>

    <script type="text/javascript" src="{{asset('games/pool/js/cannon.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/pool/config.js')}}"></script>

    <script type="text/javascript" src="{{asset('games/pool/js/OBJLoader.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/pool/js/jquery-3.1.1.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/pool/js/device.min.js')}}"></script>
    <script type="text/javascript" src="{{asset('games/pool/js/build.js')}}"></script>
    <style>
    #mode1{display:none !important}
    </style>
    
    

</head>

<body>
    <div id="world">
        <img src="{{asset('games/pool/img/up-down.png')}}" id="hitArrow" />
        <img src="{{asset('games/pool/img/round2.png')}}" id="hitRound" />
        <div id="roundDummy" /></div>

    <div id="hitAnim">
        <div></div>
        <div></div>

    </div>
    <div id="hitLine">
        <div>
            <img src="{{asset('games/pool/img/hitline.png')}}" />
        </div>

    </div>
    <img src="{{asset('games/pool/img/hand.png')}}" id="hand" />

    </div>


    <div id="player1balls"></div>
    <div id="player1escBalls"></div>
    <div id="player2balls"></div>
    <div id="player2escBalls"></div>
    <img id="ballsplace" src="{{asset('games/pool/img/forballs.png')}}" />


    <div id="mainmenu">
        <!--div class="space"></div -->
        <img src="{{asset('games/pool/img/logo_pool.png')}}" id="name" />
        <div class="space"></div>
        <img src="{{asset('games/pool/img/mode.png')}}" id="mode" />
        <div class="space"></div>
        <div id="mode_wrap">
            <div id="mode0" class="shadow active">
              <p style="font-size:50px;text-align:center;margin-top:5px;color:white">Play</p> 
            </div>
            <div id="mode1" class="shadow active">
                <img src="{{asset('games/pool/img/player.png')}}" />
                <img src="{{asset('games/pool/img/vs.png')}}" />
                <img src="{{asset('games/pool/img/player.png')}}" />
            </div>

        </div>
    </div>



    <div id="sound" class="shadow active bg">
        <img src="{{asset('games/pool/img/sound.png')}}" />
        <img src="{{asset('games/pool/img/line.png')}}" id="line" />
    </div>

    <div id="exit" class="shadow active bg">
        <img src="{{asset('games/pool/img/exit.png')}}" />
    </div>

    <div id="restart" class="shadow active bg">
        <img src="{{asset('games/pool/img/restart.png')}}" />
    </div>

    <div id="curTurn" class="">Player 1 Turn</div>

    <div id="gameEnd" class="shadow bg">

        <div id="line1"></div>
        <div id="line2"></div>
        Game Time: <span id="gameTime"></span><br/>


        <div id="exit2" class="shadow active bg">
            <img src="{{asset('games/pool/img/exit.png')}}" />
        </div>

        <div id="restart2" class="shadow active bg">
            <img src="{{asset('games/pool/img/restart.png')}}" />
        </div>
    </div>

    <div id="fullScreen" class="shadow active bg">
        <img src="{{asset('games/pool/img/fullscreen.png')}}" />
    </div>



    <div id="powerWrap">
        <div id="power">

        </div>
    </div>
    <img id="powerBorder" src="{{asset('games/pool/img/bill_power.png')}}" />




    <div id="loader_bg">
        <div id="loader">
            <div class="ball"></div>
            <div class="ball1"></div>
            Loading...
        </div>
    </div>

    <div id="mainMenu"></div>
    <div id="controlsHud"></div>

    <div id="howToPlay">
        <strong>How to play:</strong><br/> 1. Rotate the camera - hold the mouse on the screen and turn<br/> 2. Strike the ball - hold the mouse in the area and pull it down
    </div>

    <audio src="{{asset('games/pool/Sounds/ball.mp3')}}" id="ball"></audio>
    <audio src="{{asset('games/pool/Sounds/ball01s.mp3')}}" id="ball01"></audio>
    <audio src="{{asset('games/pool/Sounds/ball02s.mp3')}}" id="ball02"></audio>
    <audio src="{{asset('games/pool/Sounds/ball03s.mp3')}}" id="ball03"></audio>
    <audio src="{{asset('games/pool/Sounds/ballball.mp3')}}" id="ballball"></audio>
    <audio src="{{asset('games/pool/Sounds/board01.mp3')}}" id="board01"></audio>
    <audio src="{{asset('games/pool/Sounds/board02.mp3')}}" id="board02"></audio>
    <audio src="{{asset('games/pool/Sounds/board03.mp3')}}" id="board03"></audio>
    <audio src="{{asset('games/pool/Sounds/dropcue07.mp3')}}" id="dropcue07"></audio>
    <audio src="{{asset('games/pool/Sounds/dropcue08.mp3')}}" id="dropcue08"></audio>
    <audio src="{{asset('games/pool/Sounds/dropcue09.mp3')}}" id="dropcue09"></audio>
    <audio src="{{asset('games/pool/Sounds/dropcue10.mp3')}}" id="dropcue10"></audio>
    <audio src="{{asset('games/pool/Sounds/hitcue05.mp3')}}" id="hitcue05"></audio>
    <audio src="{{asset('games/pool/Sounds/hitcue06.mp3')}}" id="hitcue06"></audio>
    <audio src="{{asset('games/pool/Sounds/Ending_aplodisments.mp3')}}" id="ending"></audio>



</body>

</html>