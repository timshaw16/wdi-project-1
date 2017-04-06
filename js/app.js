// Player enters the site and is presented with 6 circles, start & reset button
// Player clicks on start
// Computer will then randomly flash 3 circles
// The player will then follow the flashes
// Each level will add an extra flash
// Once a player finshes the level the score level will automatically increase


// Global vars
let $lis;
let $main;
let $start;
let $reset;
let $level;
let $levelNumber;
let $message;
let level;
let playing;
let gameSequence;
let userSequence;
let score;

$(init);

function init(){
  reset();
  $lis         = $('li');
  $main        = $('main');
  $start       = $('#start');
  $reset       = $('#reset');
  $level       = $('#level');
  $levelNumber = $('#level span');
  $message     = $('.message');

  $start.on('click', start);
  $lis.on('click', guess);
  $reset.on('click', reset);
}

// Page starts off with the 'start' button. When clicked, 'Get Ready' comes across the screen
function start(){
  $message.html('Get ready...').addClass('show bounceInLeft');

  $start.hide();
  $main.fadeIn();
  $reset.fadeIn().css('display','inline-block');
  $level.fadeIn().css('display','inline-block');

  gameSequence = [];
  userSequence = [];

  // Generates the random flashes in the circles
  for (let i = 0; i <= level; i++) {
    gameSequence.push(Math.floor(Math.random() * $lis.length));
  }

// Part of the 'Get Ready' message
  setTimeout(() => {
    $message.removeClass('bounceInLeft').addClass('bounceOutRight');
    setTimeout(() => {
      $message.removeClass('show bounceOutRight');
      setTimeout(playSequence, 1000);
    }, 900);
  }, 2000);
}
// Reset's the game
function reset(){
  level = 2;
  playing = false;
  score = 1;
}

// Computer playing the flash sequence
function playSequence(){
  for (let i = 0; i <= level; i++) {
    setTimeout(() => {
      const nextIndex = gameSequence[i];
      const $nextLi = $($lis[nextIndex]);
      const prevColor = $nextLi.css('background-color');
      // Fills the hollow circles when sequence is being played by computer
      var fillColour = $nextLi.css('border-color');
      $nextLi.css('background-color', fillColour);
      // The amount of time between circle flashes
      setTimeout(() => {
      // Returns the circles back to get border-style
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
// Pushes what the player clicks into the above 'userSequence'
  const $chosenLi = $(this);
  const chosenIndex = $lis.index($chosenLi);
  const prevColor   = $chosenLi.css('background-color');
  var fillColourtwo = $chosenLi.css('border-color');
  $chosenLi.css('background-color', fillColourtwo);
  setTimeout(() => {
    $chosenLi.css('background-color', prevColor);
  }, 200);

  userSequence.push(chosenIndex);

  // Works out if the player gets the sequence correct or not
  if(userSequence.length-1 === level){
    if (gameSequence.toString() === userSequence.toString()){
      level++;
      $message.html(`Well done! Onto Level ${level-1}!`).addClass('show');
      playing = false;
      score++;
      $levelNumber.text(score);
      setTimeout(start, 3000);
    } else {
      playing = false;
      $message.html('Wrong! Start again!').addClass('show');
      setTimeout(reset, 1000);
    }
  }
}
