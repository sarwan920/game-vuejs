new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false
    },
    methods: {

        //this fucntion executes when we click on start game button
        startGame: function () {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },


        //function to attack normally
        attack: function () {

            // console.log("attacked");



            var damage = this.calculateDamage(3, 10)
            this.monsterHealth -= damage;

            if (this.checkWin()) {
                return;
            }

            damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.checkWin();



        },

        //function to use some special power to use some special attack
        specialAttack: function () {

        },
        //function to heal your self
        heal: function () {

        },

        //function for giving up on game
        giveUp: function () {
            this.gameIsRunning = false;
            this.monsterHealth = 100;
            this.playerHealth = 100;
            alert("You Have Lost! Try again");
        },

        //this fucntion calculates damage and returns it to attack fucntion
        calculateDamage: function (min, max) {
            return Math.max(Math.floor(Math.random() * max) + 1, min);
        },


        // this fucntion checks if we won the game or lost
        checkWin: function () {
            if (this.monsterHealth <= 0) {
                if (confirm("You won! Start new Game?")) {
                    this.startGame();

                } else {
                    this.gameIsRunning = false;
                }

                return true;
            } else if (this.playerHealth <= 0) {
                if (confirm("You lost! Start new Game?")) {
                    this.startGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;

        }
    }
})