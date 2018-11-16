var person;
var obstacle;
var tc;
var vertical_scale = 1.5;
var jump = false;


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


var collision = false;
var state = 0;              //states: (0)welcome --> (1)play <--> (2)play_again
var temp = 0;


function draw() {
//  FSM game-loop
    switch(state) {
//-------------------------WELCOME-----------------------------------------------------------------------
        case(0):
            background(255);

            if(temp >= 90){
            state = 1;
            
            }
            temp++;
            break;
        
    //---------------------------PLAY-----------------------------------------------------------------------
        case 1:   
            
            if(collision) {
                //console.log("hit!");
            }
            
            background(0);
            stroke(255);
            /* ground */
            line(0, height/vertical_scale, width, height/vertical_scale);
            
            /* display world */
            person.render();
            tc.show();

            /* jump, if necessary */
            if (jump || person.posy < height/vertical_scale - person.w) {
                person.jump();
            }
            /* check for collision */  
            collision = person.detectCollision(tc.obs_queue);

            /* cycle queue, if necessary */
            if(tc.obs_queue[0].posx < -tc.obs_queue[0].w){
                tc.cycle();
            }

            break;
    
    //------------------------PLAY-AGAIN?--------------------------------------------------------------------
        case 2:
                break;

        default:
                break;
        } 
    
        
    }
