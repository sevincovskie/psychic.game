const game = {
    wins : 0,
    losses :0,
    guesses_left : 9,
    guessed : [],
   comp_choice : "",

   randomChoice : function (){ // sehife 1ci ve sonuncu acilanda ise dusur
    const min = 97;
    const max = 122;

    let asciiNumber = Math.floor(Math.random() *(max-min)+min) ;
    this.comp_choice = String.fromCharCode(asciiNumber) ;

   },

   guessesFar : function (h) {
    if  (! this.guessed.includes(h)){
        this.guessed.push(h);
    }

    
   },
  //muqayise
   comparison : function(h) {
    if ( h=== this.comp_choice){
        this.wins++;
        this.restart();
        
    } else { // qalibiyyet ve ya meglubiyyet muqayisesi
         if (this.guesses_left > 0) {
            this.guesses_left--;
            this.guessesFar(h);
         } else {
            this.losses++;
            this.restart();
         }
    }
   },

   restart : function(){

    this.guesses_left = 9;
    this.guessed = [];
    this.randomChoice ();

   },


 
 
    reload : function(){
     document.querySelector('#wins').innerHTML = this.wins;
     document.querySelector('#losses').innerHTML = this.losses;
     document.querySelector('#guesses_left').innerHTML = this.guesses_left;
     document.querySelector('#guessed').innerHTML = this.guessed.join (',');
   }
 
}


//sehife acilanda restar cagir

game.restart();
game.reload();


window.addEventListener('keyup', function(e){
    game.comparison(e.key);
    game.reload();


});