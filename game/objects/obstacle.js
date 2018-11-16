function Obstacle(h, w, posx, posy) {

    this.height = h;
    this.w = w;
    this.posx = posx;
    this.posy = posy;

    this.render = function() {
        rect(this.posx, this.posy, w, h);
    }

    this.move = function() {
        this.posx -= 5;
    }

}