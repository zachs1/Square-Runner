function View(type) {

    this.type = type;
    if (type == 'welcomeview') {
        this.show = function () {
            background(255);
            textAlign(CENTER, CENTER);
            textFont('arial');
            textSize(100);
            text('SQUARE RUNNER', windowWidth / 2, 150);
        }
    }

    else if (type == 'playview') {
        this.show = function () {

            background(0);
            stroke(255);
            /* ground */
            line(0, height / vertical_scale, width, height / vertical_scale);

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


        }
    }

    else if (type == 'loseview') {
        this.show = function () {
            background(100);
            textAlign(CENTER, CENTER);
            textFont('arial');
            textSize(100);
            text('YOU LOST', windowWidth / 2, 150);
        }
    }

}