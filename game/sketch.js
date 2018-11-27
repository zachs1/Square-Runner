var person;
var obstacle;
var tc;
var vertical_scale = 1.5;
var jump = false;
var currView = 'welcomeview';
var person_posx;


function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(60);
    person_posx = width/8;
  //objects
    person = new Person(person_posx, height/vertical_scale);
    
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
        if(vc.welcome_view.play_button_hover){
            currView = 'playview';
        }
    }

    else if(currView == 'loseview'){
        tc.generate();
        if(vc.lose_view.play_button_hover){
            currView = 'playview';
        }
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
                vc.play_view.score.score = 0;
            }
            if(tc.detectPass()) {
                vc.play_view.score.incrementScore();
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

