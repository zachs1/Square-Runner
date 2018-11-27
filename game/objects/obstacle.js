function Obstacle(h, w, posx, posy) {

    this.height = h;
    this.w = w;
    this.posx = posx;
    this.posy = posy;
    this.passed = false;

    this.render = function() {
        rect(this.posx, this.posy, w, h);
    }

    this.move = function() {
        this.posx -= 5;
    }

    this.detectPassObj = function() {
        if (this.posx + this.w < person_posx &&
            this.passed == false) 
        {
            this.passed = true;
            return true;
        }
        
        return false;
    }

}