// Follow the Flashy Squares //

// Player presses 'start'
// 4 squares show up and one square flashes
// The player will remember the square that flashes up and has to press that
// Another square in that 4 will flash up, player presses the first square and then the second one
// This happens one more time. The player will have to press the first, second and third square which flash up
// Then the squares will multiply to 8
// The first 3 squares will flash up along with a new one in the new set of sqaures. The player will have to follow the sequence
// and so on!!!!!!!!!!!!!!!!!!!!!!!!
// The will be timer at the bottom right side.

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

$(document).ready(function(){


  const player = 1;
  $('.square').on('click', function() {

  });
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

  $('.Square').click(function(event) {
    switch($(event.target).attr('id')) {
      case $.square:
        $(event.target).css('background-color', 'red');
        break;

    }
  });

});
