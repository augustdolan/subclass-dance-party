$(document).ready(function() {
  window.dancers = [];

  $('.lineUpButton').on('click', function(event) {

    for (var i = 0; i < window.dancers.length; i++) {
      $(window.dancers[i].$node).addClass('priorityLeft');
    }

    // var lineUpFunctionName = $(this).data('lineup-function-name');
    // var lineUpFunction = window[lineUpFunctionName];

  });

  $(document).on({
    mouseenter: function() {
      $(this).addClass('show');
    },
    mouseleave: function() {
      $(this).removeClass('show');
    }
  }, '.worm');

  $('.closestNeighbour').on('click', function(event) {
    console.log('on click event was pressed');
    MakeBouncyDancer.prototype.closestNeighbour();
  });

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    if (dancer.constructor === MakeBlinkyDancer) {
      dancer.$node.addClass('worm');
    }
    window.dancers.push(dancer);
    $('body').append(dancer.$node);


    // iterate over dancers to line them up
  });
});

