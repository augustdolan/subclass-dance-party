var MakeBouncyDancer = function(top, left, timeBetweenSteps) {
  this.position = {top: top, left: left};
  this.newPosition = {top: top + 100, left: left + 350};
  MakeDancer.call(this, top, left, timeBetweenSteps);

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