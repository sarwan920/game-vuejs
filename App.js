new Vue({
    el: '#app',
    data: {
        playerHealth:100,
        monsterHealth:100,
        gameIsRunning:false
    },
    methods: {

        //this fucntion executes when we click on start game button
        startGame: function() {
            this.gameIsRunning=true;
            this.playerHealth=100;
            this.monsterHealth=100;
        },


        //function to attack normally
        attack:function(){

            // console.log("attacked");
            
            var max=10;
            var min =3;

            var damage= Math.max(Math.floor(Math.random() * max) +1,min) ;
            this.monsterHealth =this.monsterHealth-damage;
            
            if(this.monsterHealth<=0){
                alert("You won!");
                this.gameIsRunning=false;
                return;
            }


            max=12;
            min=5;
            damage= Math.max(Math.floor(Math.random() * max) +1,min) ;
            this.playerHealth=this.playerHealth-damage;

            if(this.playerHealth<=0){
                alert('You lost!');
                this.gameIsRunning=false;
            }
             
            
        },

        //function to use some special power to use some special attack
        specialAttack:function(){

        },
        //function to heal your self
        heal:function(){

        },

        //function for giving up on game
        giveUp: function(){
            this.gameIsRunning=false;
            this.monsterHealth=100;
            this.playerHealth=100;
            alert("You Have Lost! Try again");
        }
    }
})