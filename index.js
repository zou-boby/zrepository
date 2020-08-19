var bird = {
    bgPosition : 0,
    bgSpeed : 2,
    worldStyle : 'blue',
    birdTop : 235,
    birdPositionY : 0,
    birdSpeed : 2,
    birdFlag : true,

    init : function() {
        this.initData();
        this.animition();
        this.handerStart();
    },
    animition : function () {
        var count = 0;
        setInterval(() => {
            this.bgMove();
            if (!this.birdFlag) {
                this.birdDrop();
            }
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
        this.oStart = document.getElementsByClassName('start')[0];
        this.oBird = document.getElementsByClassName('bird')[0];
        this.oScore = document.getElementsByClassName('score')[0];
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
            this.oStart.classList.remove('start-' + this.worldStyle);
            this.worldStyle = this.worldStyle === 'white' ? 'blue' : 'white';
            this.oStart.classList.add('start-' + this.worldStyle);
        // },500) 
    },
    birdJump : function () {
        this.birdTop = this.birdTop === 220 ? 260 : 220;
        this.oBird.style.top = this.birdTop + 'px';
    },
    birdFly : function (count) {
        this.oBird.style.backgroundPositionX = count % 3 * -30 + 'px' ;
    },

    handerStart : function ()  {
        var self = this;
        this.oStart.onclick = function () {
            self.oScore.style.display = 'block';
            self.oStart.style.display = 'none';
            self.oBird.style.left = 80 + 'px';
            self.birdFlag = false;
        }
    },
    birdDrop : function () {
        this.birdPositionY += this.birdSpeed;
        this.oBird.style.top = this.birdPositionY;
    }

}



bird.init();
