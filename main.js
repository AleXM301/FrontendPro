let ladder = {
    score: 0,
    up: function () {
         this.score++;
        return this;

    },
    down: function () {
        this.score--;
        return this;

    },
    showStep: function () {
        console.log(this.score);
        return this;
    }
};

ladder.up().up().down().showStep();

