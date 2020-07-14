new Vue({
    el: '#app',
    data: {
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false
    },
    methods: {
        startGame: function() {
            this.gameIsRunning=true;
            this.playerHealth=100;
            this.monsterHealth=100;
        },
        attack:function(){
            let min=1,max=100;
             
            var random=Math.random() * (max - min) + min;
            this.playerHealth=Math.floor(random);
            this.monsterHealth=Math.floor(random);

            if(this.playerHealth <10){
                alert("You lost and Monster Win");
                this.gameIsRunning=false;
                this.playerHealth=100;
                this.monsterHealth=100;
            }
            if(this.monsterHealth<15){
                alert("You Won and Monster Lost");
                this.gameIsRunning=false;
                this.monsterHealth=100;
                this.playerHealth=100;
            }
        },
        giveUp: function(){
            this.gameIsRunning=false;
            this.monsterHealth=100;
            this.playerHealth=100;
            alert("You Have Lost! Try again");
        }
    }
})