var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

function setup(){
    canvas = createCanvas(400,400);
    database = firebase.database();
    game = new Game();
    game.getState();
    game.start();    
}

function draw(){
    if(playerCount === 4) {
        game.update(1)
    }
    if(gameState === 1) {
        clear();
        game.play();
    }
    
}



































function readPosition(data) {
    position = data.val();
    console.log(position.x);
    hypBall.x = position.x;
    hypBall.y = position.y;
}

function writePosition(x,y) {
    database.ref('ball/position').set ({
        'x': position.x + x,
        'y': position.y + y
    })
}

function showError(){
    console.log("Error in writing to the database");
  }



  
  
/*
var database 
var position1
var ball1;
var pos;

function setup(){
    createCanvas(500,500);
    database=firebase.database();
    ball1 = createSprite(250,250,10,10);
    ball1.shapeColor = "red";
    position1=database.ref("ball/position");
    position1.on("value",readPosition,showError);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
}

function readPosition(data){
    pos = data.val();
    console.log(pos.x);
    ball1.x= pos.x;
    ball1.y= pos.y;
}

function showError(){
    console.log("error in writing to database")
}

function writePosition(x,y){
    database.ref("ball/position").set({
        'x': pos.x + x,
        'y': pos.y + y
    })
} */