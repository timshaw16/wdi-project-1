// Global vars
let $lis;
let level = 2;
let playing = false;
let gameSequence;
let userSequence;
let score = 1;

$(init);

// Allows the player to click on the 'start' to start the game and initiate all functions within init.
function init(){
  $lis = $('li');
  $('#start').on('click', start);
  $('li').on('click', guess);
  // $('#reset').on('click', clearContents);
}

// empty arrays which are then filled with what the computer and user picks
function start(){
  gameSequence = [];
  userSequence = [];

  // Picks what circles flash randomly
  for (let i = 0; i <= level; i++) {
    gameSequence.push(Math.floor(Math.random() * $lis.length));
  }
  console.log(gameSequence);
  playSequence();
}

// Computer playing the sequence
function playSequence(){
  for (let i = 0; i <= level; i++) {
    setTimeout(() => {
      const nextIndex = gameSequence[i];
      const $nextLi = $($lis[nextIndex]);
      const prevColor = $nextLi.css('background-color');
      // Fills the hollow circles when clicked on
      var fillColour = $nextLi.css('border-color');
      $nextLi.css('background-color', fillColour);
      // The amount of time between circle flashes
      setTimeout(() => {
        $nextLi.css('background-color', prevColor);
        if (i === level){
          playing = true;
          console.log('You can play');
        }
      }, 200);
    }, 1000*i);
  }
}

function guess() {
  if (!playing) {
    console.log('You cant play yet');
    return;
  }
  // Get the element I clicked on
  const $chosenLi = $(this);
  // Get the index of that li
  const chosenIndex = $lis.index($chosenLi);
  const prevColor   = $chosenLi.css('background-color');
  // $chosenLi.css('background-color', 'white');
  var fillColourtwo = $chosenLi.css('border-color');
  $chosenLi.css('background-color', fillColourtwo);
  setTimeout(() => {
    $chosenLi.css('background-color', prevColor);
  }, 200);

  // Pushes what the player clicks on to the above 'userSequence'
  userSequence.push(chosenIndex);

  // Works out if the player gets the sequence correct or not
  if(userSequence.length-1 === level){
    if (gameSequence.toString() === userSequence.toString()){
      // $('div').animate({left: '250px'});
      $("#welldone").show()

      // $("#welldone").show(function(){
      //   $("h2").show();
      //   level ++;
      //   playing = false;
      //   // counting levels
      //   score ++;
      //   $('.level').text(`level: ${score}`);
      // }else{
      //   playing = false;
      //   $("#welldone").show(function(){
      //     $("h2").hide();
      //   }
      // }

      // function clearContents () {
      //   gameSequence = null;
      //   userSequence = null;
      // }
    }
  }
}
