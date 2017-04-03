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

$(document).ready(function(){
  console.log('loaded');

  // Below makes it a global game const
  const game = {
    count: 0,
    possibilities: ['#green', '#blue', '#red', '#orange', '#purple'],
    currentGame: [],
    player: []
};
    // Making a new game
    game.newGame = function () {
      // clearing the game
      game.clearGame();
    };

    game.clearGame = function clearGame() {
      game.currentGame = [];
      game.count = 0;
      game.addCount();
    };

    // // If else statement * if you get the sequence wrong it will remove the class on the click and add the danger button to show player they got it wrong
    // game.strict = fuction strict() {
    //   if (game.strict === false) {
    //     game.strict === true;
    //     $('#strict').html('Is currently on').removeClass('btn-danger').addClass('btn-primary');
    //   } else {
    //     game.strict === false;
    //     $('#strict').html('Is currently off').removeClass('btn-danger').addClass('btn-primary');
    //   }
    //   game.newGame();
    // };
    // Setting the intervals of the moves
    game.showMoves = function showMoves() {
      var i = 0;
      var moves = setInterval(function(){
        game.playGame(game.currentGame[i]);
        i++;
        if (i >=game.currentGame.length) {
          clearInterval(moves);
        }
      }, 600);

      game.clearPlayer();
    };

    // Turns the circles into the colour using the CSS method
    game.shade = function shade(colName) {
      console.log(colName);
      switch(colName) {
        case'#blue':
        $(colName).css('background-color', 'blue');
        break;
        case'#green':
        $(colName).css('background-color', 'green');
        break;
        case'#red':
        $(colName).css('background-color', 'red');
        break;
        case'#purple':
        $(colName).css('background-color', 'purple');
        break;
        case'#orange':
        $(colName).css('background-color', 'orange');
      }
    }

    // Plays the game
    game.playGame  =function playGame(field) {
      // hover the circles
      $(field).addClass('hover');
      // switch statement shade above
      game.shade(field);
      setTimeout(function() {
        $(field).removeClass('hover');
      }; 300);
    };
    // Clearing the current players array
    game.clearPlayer = function clearPlayer() {
      game.player = [];
    };
    // Putting what the player clicks on into the top player array
    game.addToPlayer = function addToPlayer(id) {
      var field = '#'+id;
      console.log(field);
      game.player.push(field);
      hame.playerTurn(field);
    };

    // *if statement* counting if the player had got the move correct or not.
    game.playerTurn = function playerTurn(x) {
      if (game.player[game.player.length - 1] !==
        game.currentGame[game.player.length - 1]) {
          if (game.strict) {
            alert('sorry not right');
            game.newGame();
          } else {
            alert ('wrong');
            game.showMoves();
          }
        } else {
          game.shade(x);
          var check = game.player.length === game.current.length;
          if (check) {
            if (game.count === 20){
              alert ('Aced it');
            } else {
              alert('Good job, next level');
              game.nextLevel();
            }
          }
        }
      };

      // Adding the count above in order to go to the next level
      game.nextLevel = function nextLevel() {
        game.addCount();
      }

      // Generates the moves of the circles/colours
      game.generateMove = function generateMove() {
        game.currentGame.push(game.possibilities[Math.floor(Math.random()*5))]);
        game.showMoves();
      };

      // counter in the middle counting how many moves player has taken
      game.addCount = function addCount() {
        game.count++;
        $('#clickNumber').addClass('animated fadeOutDown');

        // counter in the middle if player gets move wrong
        SetTimout(function(){
          $('#clickNumber').removeClass('fadeOutDown').html(game.count).addClass('fadeInDown');
        }, 200);
        game.generateMove();

      };

      game.newGame();



    });

















































    // $(() => {
    //   const $square = $('.square');
    //
    //   for (var i = 0; i < $square.length; i++) {
    //     $square[i].addEventListener('click', changeColor);
    //   }
    //   function changeColor(event){
    //     event.style.backgroundColor =    randomColor();
    //   }
    //
    // });








    // const player = 1;
    // $('.square').on('click', function() {
    //   console.log('.square');
    // });
    //
    // $('.square').click(function(){
    //   if ($(this).css('background-color') === '#333333') {
    //     $(this).css('background-color', '#1796cf');
    //   } else {
    //     $(this).css('background-color', '#333333');
    //   }
    //
    // });

    // const $square = $('#1').click(function() {
    //   $square.removeClass('selected');
    //   $(this).addClass('selected');
    // });

    // $(function(){
    //   $('.square').hover(function(){
    //     $(this).addClass('highlight');
    //   }, function(){
    //     $(this).removeClass('highlight');
    //   });
    //
    //   $('.square').click(function(){
    //     $(this).addClass('highlight_stay');
    //   });

    // $('.Square').click(function(event) {
    //   switch($(event.target).attr('id')) {
    //     case $.square:
    //       $(event.target).css('background-color', 'red');
    //       break;
    //
    //   }
    // });
