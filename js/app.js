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

// Allows the player to click on the 'start' to start the game and initiate all functions within init.
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

// empty arrays which are then filled with what the computer and user picks
function start(){
  $message.html('Get ready...').addClass('show bounceInLeft');

  $start.hide();
  $main.fadeIn();
  $reset.fadeIn().css('display','inline-block');
  $level.fadeIn().css('display','inline-block');

  gameSequence = [];
  userSequence = [];

  // Picks what circles flash randomly
  for (let i = 0; i <= level; i++) {
    gameSequence.push(Math.floor(Math.random() * $lis.length));
  }

  // console.log(gameSequence);
  setTimeout(() => {
    $message.removeClass('bounceInLeft').addClass('bounceOutRight');
    setTimeout(() => {
      $message.removeClass('show bounceOutRight');
      setTimeout(playSequence, 1000);
    }, 2000);
  }, 2000);
}

function reset(){
  level = 2;
  playing = false;
  score = 1;
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
      level++;
      $message.html(`Well done... Level ${level-1}!`).addClass('show');
      playing = false;
      score++;
      $levelNumber.text(score);
      setTimeout(start, 3000);
    } else {
      playing = false;
      $message.html('Wrong! Start again!').addClass('show');
      setTimeout(reset, 3000);
    }
  }
}
