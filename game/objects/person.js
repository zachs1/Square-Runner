function Person(posx, posy) {
    
    this.posx = posx;
    this.posy = posy - 15;
    this.accy = -2;
    this.vely = 25;
    this.w = 15;
    this.r = 255; 
    this.g = 255; 
    this.b = 255;
    this.currColor = color(this.r, this.g, this.b);
    

    this.render = function() {
        //fill(255)
        //rect(this.posx, this.posy, this.w, this.w);
        
        for (var i = this.posx; i < this.posx + this.w; i++) {
            for (var j = this.posy; j < this.posy + this.w; j++) {
                set(i, j, color(this.r, this.g, this.b));
                
            }
        }
        updatePixels();
        this.r = 255 -  Math.ceil ( 150 * Math.random() );
        this.g = 255 -  Math.ceil ( 150 * Math.random() );
        this.b = 255 -  Math.ceil ( 150 * Math.random() );

        
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

    this.detectCollision = function(obs_queue) {
        for(i = 0; i < obs_queue.length; i++)
        if( (obs_queue[i].posx <= this.posx + this.w) && 
            (obs_queue[i].posx + obs_queue[i].w >= this.posx) &&
            (obs_queue[i].posy <= this.posy))
            {
                return true;
            }

        return false;
    }
}