var MakeCollisionDancer = function(top, left, timeBetweenSteps) {
  // add incrementer as property on this (randomize?)
  this.incrementer = [Math.random() * 10, Math.random() * 10];
  top = Math.random() * 100;
  left = Math.random() * 100;
  top = top + '%';
  left = left + '%';
  // use bouncyDancer as superclass
  MakeBouncyDancer.call(this, top, left, timeBetweenSteps);
};

// link up the prototype
MakeCollisionDancer.prototype = Object.create(MakeBouncyDancer.prototype);
// make the constructor
MakeCollisionDancer.prototype.constructor = MakeCollisionDancer;

// functionality:

// no input

// key pieces: current position, access to original dancer step function, animating movement, logic to check position & switch direction, fixed incrementations with flexibility to change from positive to negative,
// purpose: moving the dancer one increment & changing direction of movement when it reaches the edge of its parent
// Explanation: uses the current position & increases it by current incrementer, & if it reaches an edge the incrementer is flipped to move in the other direction
// output: moves the dancer left or right
MakeCollisionDancer.prototype.step = function() {

  MakeDancer.prototype.step.call(this);
  var topNumPosition = parseInt(this.position.top.split('%')[0]);
  if (topNumPosition >= 99 || topNumPosition <= 1) {
    this.incrementer[0] *= -1;
  }

  if (topNumPosition + this.incrementer[0] >= 99) {
    topNumPosition = 99;
  } else if (topNumPosition + this.incrementer[0] <= 1) {
    topNumPosition = 1;
  } else {
    topNumPosition += this.incrementer[0];
  }

  topNumPosition += this.incrementer[0];
  this.position[0] = topNumPosition + '%';

  var leftNumPosition = parseInt(this.position.left.split('%')[0]);
  if (leftNumPosition >= 99 || leftNumPosition <= 1) {
    this.incrementer[1] *= -1;
  }

  if (leftNumPosition + this.incrementer[1] >= 99) {
    leftNumPosition = 99;
  } else if (leftNumPosition + this.incrementer[1] <= 1) {
    leftNumPosition = 1;
  } else {
    leftNumPosition += this.incrementer[1];
  }





  this.position[1] = leftNumPosition + '%';

  this.$node.animate({
    top: this.position[0],
    left: this.position[1]
  }, 1000, 'linear');
};

















// Want to create a subclass bouncy dancer



// Input: clicking on button to create collision dancer needs top, left, and timer-thing

// Key pieces: overwrite the step function => step function will move the dancer in a direction & uses logic that executes when we reach one of the edges that reverses the direction of the dancer, thisPosition & this.newPosition, change top & left to use percentages

// Output: dancer that bounces when it hits walls

// Explanation: it will take in the top and left inputs, as well as the step timer, it will create a dancer in those positions, moving in a {certain direction} & then once it hits an edge, the direction is reversed
