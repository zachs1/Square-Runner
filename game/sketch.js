var person;
var obstacle;
var tc;
var vertical_scale = 1.5;
var jump = false;
var currView = 'welcomeview';


function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);

  //objects
    person = new Person(width/8, height/vertical_scale);
    
  //controllers
    tc = new TerrainController();
    tc.generate();
}


function keyPressed() {
    if(keyCode == UP_ARROW) {
        jump = true;
    }
}

function keyReleased() {
    if(keyCode == UP_ARROW) {
        jump = false;
    }
}   

function mousePressed() {
    if(currView == 'welcomeview'){
        currView = 'playview';
    }

    else if(currView == 'loseview'){
        tc.generate();
        currView = 'playview';
    }
}


var collision = false;
var temp = 0;
var vc = new ViewController();


function draw() {
//  FSM game-loop
    switch(currView) {
//-------------------------WELCOME-----------------------------------------------------------------------
        case('welcomeview'):
            vc.welcome_view.show();
            break;
        
//---------------------------PLAY-----------------------------------------------------------------------
        case('playview'):   
            vc.play_view.show();
            collision = person.detectCollision(tc.obs_queue);
            if (collision) {
                currView = 'loseview';
            }

            break;
    
//------------------------PLAY-AGAIN?--------------------------------------------------------------------
        case('loseview'):
            vc.lose_view.show();
            break;

        default:
                break;
        } 
    
        
    }

