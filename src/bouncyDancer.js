var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  this.position = {top: top, left: left};
  this.newPosition = {top: top + 100, left: left + 350};
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="bouncyDancer"></span>');
};

MakeBouncyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBouncyDancer.prototype.constructor = MakeBouncyDancer;


MakeBouncyDancer.prototype.step = function() {
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

// Function lineUp

// Input: Click button

// key pieces: position paramters (top & left), move it to new position, need to stop step movement
// justification: move the dancers to left and halt any movement
// explanation: save this.position to this.savedPosition, save this.newPosition to this.savedNewPosition, and then set both to left 0 and top math.random()

// Output: moving bouncyDancer to left