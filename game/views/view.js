function View(type) {
    this.score = new Score();
    this.type = type;
    if (type == 'welcomeview') {
        //play button
        this.button_width = 200;
        this.button_height = 100;
        this.play_button_hover = false;
        
        this.show = function () {
            background(255);
            textAlign(CENTER, CENTER);
            textFont('avante garde');
            textSize(100);
            fill(0);
            text('SQUARE RUNNER', windowWidth / 2, 100);

            this.button_posx = windowWidth / 2 - this.button_width/2;
            this.button_posy =  windowHeight/2 - this.button_height/2;
            
            
            if(mouseX >= this.button_posx && mouseX <= this.button_posx + this.button_width
                && mouseY <= this.button_posy + this.button_height && mouseY >= this.button_posy) {
                    fill(0);
                    rect(this.button_posx, this.button_posy, this.button_width, this.button_height);
                    textSize(40);
                    fill(255);
                    text('PLAY', windowWidth/2, windowHeight/2);
                    this.play_button_hover = true;
                    
                }
            else {
                fill(255);
                stroke(0);
                rect(this.button_posx, this.button_posy, this.button_width, this.button_height);
                textSize(40);
                fill(0);
                text('PLAY', windowWidth/2, windowHeight/2);
                this.play_button_hover = false;
            }
            
        }
    }

    else if (type == 'playview') {
        this.play_button_hover = false;
        this.score = new Score();
        
        this.show = function () {

            

            background(0);
            strokeWeight(1);
            
            /* ground */
            stroke(255);
            line(0, height / vertical_scale, width, height / vertical_scale);
            noStroke();

            /* display world */
            person.render();
            tc.show();
            

            /* jump, if necessary */
            if (jump || person.posy < height / vertical_scale - person.w) {
                person.jump();
            }

            /* cycle queue, if necessary */
            if (tc.obs_queue[0].posx < -tc.obs_queue[0].w) {
                tc.cycle();
            }

            this.score.show();
        }
    }

    else if (type == 'loseview') {
        this.play_button_hover = false;
        this.show = function () {
            this.button_width = 300;
            this.button_height = 100;
            this.button_posx = windowWidth/2 - this.button_width/2;
            this.button_posy =  windowHeight/2 - this.button_height/2;
            newGame = true;
            
            background(200, 5, 25);
            textAlign(CENTER, CENTER);
            textFont('avante garde');
            textSize(100);
            fill(0);
            stroke(255);
            strokeWeight(5)
            text('YOU LOST', windowWidth / 2, 100);
            textSize(50);
            strokeWeight(3);
            text('Score: ' + this.score.score, windowWidth/2, 200);

            if(mouseX >= this.button_posx && mouseX <= this.button_posx + this.button_width
                && mouseY <= this.button_posy + this.button_height && mouseY >= this.button_posy) {
                    fill(0);
                    strokeWeight(2);
                    stroke(255);
                    rect(this.button_posx, this.button_posy, this.button_width, this.button_height);
                    textSize(40);
                    fill(255);
                    noStroke();
                    text('Play again?', windowWidth/2, windowHeight/2);
                    this.play_button_hover = true;
                    
                }
            else {
                fill(255);
                strokeWeight(4);
                stroke(0);
                rect(this.button_posx, this.button_posy, this.button_width, this.button_height);
                textSize(40);
                fill(0);
                noStroke();
                text('Play again?', windowWidth/2, windowHeight/2);
                this.play_button_hover = false;
            }
            
        }
    }

}