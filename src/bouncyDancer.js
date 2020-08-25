var BouncyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.position = [top, left];
  this.newPosition = [top + 15, left + 15];
};

BouncyDancer.prototype = Object.create(MakeDancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;


BouncyDancer.prototype.step = function() {
  //
  MakeDancer.prototype.step.call(this);
  this.$node.animate(this.setPosition(this.newPosition[0], this.newPosition[1]), 1000);
  this.$node.animate(this.setPosition(this.position[0], this.position[1]), 1000);
};