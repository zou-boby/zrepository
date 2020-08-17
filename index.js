var bird = {
    bgPosition : 0,
    bgSpeed : 2,
    worldStyle : 'blue',
    birdTop : 235,
    birdPosition : 0,

    init : function() {
        this.initData();
        var count = 0;
        setInterval(() => {
            this.bgMove();
            // count ++ ;
            if(++count % 10 == 0) {
                this.starGame();
                this.birdJump(); 
                this.birdFly(count);
            }
        }, 30);
    },
    initData : function () {
        this.el = document.getElementById('game');
        this.start = document.getElementsByClassName('start')[0];
        this.oBird = document.getElementsByClassName('bird')[0];
    },
    
    bgMove : function () {
        // var self = this; // this 指向window
        // setInterval(function () {
            this.bgPosition -= this.bgSpeed;
            this.el.style.backgroundPositionX = this.bgPosition + 'px';
        // },30) 
    },
    starGame : function () {
        // var self = this;
        // setInterval(function(){
            this.start.classList.remove('start-' + this.worldStyle);
            this.worldStyle = this.worldStyle === 'white' ? 'blue' : 'white';
            this.start.classList.add('start-' + this.worldStyle);
        // },500) 
    },
    birdJump : function () {
        this.birdTop = this.birdTop === 220 ? 260 : 220;
        this.oBird.style.top = this.birdTop + 'px';
    },
    birdFly : function (count) {
        this.oBird.style.backgroundPositionX = count % 3 * -30 + 'px' ;
    }
}



bird.init();
