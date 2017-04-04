// Follow the Flashy Squares //
// Player presses 'start'
// 4 squares show up and one square flashes
// The player will remember the square that flashes up and has to press that
// Another square in that 4 will flash up, player presses the first square and then the second one
// This happens one more time. The player will have to press the first, second and third square which flash up
// Then the squares will multiply to 8
// The first 3 squares will flash up along with a new one in the new set of sqaures. The player will have to follow the sequence
// and so on!!!!!!!!!!!!!!!!!!!!!!!!
// There will be a timer at the bottom right side.

let $lis;
let level = 2;
let playing = false;
let gameSequence;
let userSequence;

$(init);

function init(){
  $lis = $('li');
  $('#start').on('click', start);
  $('li').on('click', guess);
}

function start(){
  gameSequence = [];
  userSequence = [];

  for (let i = 0; i <= level; i++) {
    gameSequence.push(Math.floor(Math.random() * $lis.length));
  }
  console.log(gameSequence);
  playSequence();
}

function playSequence(){
  for (let i = 0; i <= level; i++) {
    setTimeout(() => {
      const nextIndex = gameSequence[i];
      const $nextLi = $($lis[nextIndex]);
      const prevColor = $nextLi.css('background-color');
      $nextLi.css('background-color', '#dcdcf7');

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
  $chosenLi.css('background-color', '#dcdcf7');
  setTimeout(() => {
    $chosenLi.css('background-color', prevColor);
  }, 500);

  // Add it to the sequence
  userSequence.push(chosenIndex);

  if(userSequence.length-1 === level){
    if (gameSequence.toString() === userSequence.toString()){
      alert('Well Done, you won!');
      level ++;
      playing = false;
    } else {
      alert('Oops, you loose!');
      playing = false;
    }
  }
}
