function Score() {
    this.score = 0;

    this.incrementScore = function() {
        this.score += 1;
    }

    this.show = function() {
        textSize(20);
        fill(255);
        text('SCORE\n' + this.score, windowWidth - 100, 50);
    }
}