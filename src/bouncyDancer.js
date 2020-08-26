var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  this.position = {top: top, left: left};
  this.newPosition = {top: top + 100, left: left + 350};
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bouncyDancer"></span>');
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;


MakeBouncyDancer.prototype.step = function() {
  console.log(window.dancers);
  var top = this.newPosition.top;
  MakeDancer.prototype.step.call(this);
  this.$node.animate({
    top: this.newPosition.top,
    left: this.newPosition.top
  });
  // this.setPosition();

  this.$node.animate({
    top: this.position.top,
    left: this.position.left
  }, 1000);
  // this.setPosition(this.newPosition[0], this.newPosition[1]);
};

// inputs: window.dancers

// key piece: .bouncyDancer class, this.position,  closest neighbour,

// outputs: bouncy Dancers move towards their closest neighbour
MakeBouncyDancer.prototype.closestNeighbour = function() {

  // iterate over window.dancers
  for (var i = 0; i < window.dancers.length; i++) {
    var currentDancer = window.dancers[i];
    var closestNeighbour;
    var smallestDistance;
    for (let j = 0; j < window.dancers.length; j++) {
      var currentNeighbour = window.dancers[j];
      if (i === j) {
        continue;
      }
      var x = (currentDancer.position.left - currentNeighbour.position.left) ^ 2;
      var y = (currentDancer.position.top - currentNeighbour.position.top) ^ 2;
      var currentDistance = x + y;

      if (smallestDistance === undefined || currentDistance < smallestDistance) {
        smallestDistance = currentDistance;
        closestNeighbour = currentNeighbour;
      }
    }
    currentDancer.$node.animate({
      top: closestNeighbour.position.top,
      left: closestNeighbour.position.left
    }, 1000);
    currentDancer.position.top = closestNeighbour.position.top;
    currentDancer.position.left = closestNeighbour.position.left;
  }

};

// Function lineUp

// Input: Click button

// key pieces: position paramters (top & left), move it to new position, need to stop step movement
// justification: move the dancers to left and halt any movement
// explanation: save this.position to this.savedPosition, save this.newPosition to this.savedNewPosition, and then set both to left 0 and top math.random()

// Output: moving bouncyDancer to left