function TerrainController () {
//  queue of obstacles -- cycle display as objects move on/off screen
    this.obs_queue = [];
    this.all_posx = [];
    this.queue_len = 10;

//  queue constructor
    this.random_attributes = function(prev_posx) {
//      [h, w, posx, posy]
        
        
        var h = Math.random() * 30 + 15;                  
        var w = Math.random() * 40 + 20;                  
        var posx = Math.random() * 250 + 150 + prev_posx;  
        var posy = height/vertical_scale - h;                           
        var attr_arr = [h, w, posx, posy, posx];

        return attr_arr;
    }

    this.generate = function generate() {
        var prev_posx = width;
        for(i = 1; i <= this.queue_len; i++) {
            var attr_arr = this.random_attributes(prev_posx);
            prev_posx = attr_arr[4];
            this.obs_queue[i-1] = new Obstacle(attr_arr[0], attr_arr[1], attr_arr[2], attr_arr[3]);
            this.all_posx = this.obs_queue[i-1].posx;
        }
    }

    this.show = function() {
        for (i = 0; i < this.queue_len; i++) {
            this.obs_queue[i].render();
            this.obs_queue[i].move();
        }
    }

//  cycle
    this.cycle = function() {
        
        for(i = 1; i < this.queue_len; i++){
            this.obs_queue[i-1] = this.obs_queue[i];
        }
        var prev_obs = this.obs_queue[8]
        var attr_arr = this.random_attributes(prev_obs.posx);
        

        this.obs_queue[9] = new Obstacle(attr_arr[0], attr_arr[1], attr_arr[2], attr_arr[3]);
    }


}