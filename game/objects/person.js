function Person(posx, posy) {
    
    this.posx = posx;
    this.posy = posy - 15;
    this.accy = -2;
    this.vely = 25;
    this.w = 15;
    

    this.render = function() {
        rect(this.posx, this.posy, this.w, this.w);
    }

    this.jump = function() {
        
        if (this.posy <= height/vertical_scale - this.w) {
            this.posy -= this.vely;
            this.vely += this.accy;

            if(this.posy > height/vertical_scale - this.w) {
                this.posy = height/vertical_scale - this.w;
            }
        }

        if(this.posy == height/vertical_scale - this.w) {
            this.vely = 25;
        }

    }

    this.detectCollision = function(obs) {
        if( (obs.posx <= this.posx + this.w) && 
            (obs.posx + obs.w >= this.posx) )
            {
                return true;
            }

        return false;
    }
}