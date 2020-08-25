describe('bouncyDancer', function() {

  var bouncyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    bouncyDancer = new MakeBouncyDancer(10, 20, timeBetweenSteps);
  });

  it('should call step at least once per second', function() {
    sinon.spy(bouncyDancer, 'step');
    expect(bouncyDancer.step.callCount).to.be.equal(0);
    clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
    clock.tick(timeBetweenSteps);

    expect(bouncyDancer.step.callCount).to.be.equal(1);

    clock.tick(timeBetweenSteps);
    expect(bouncyDancer.step.callCount).to.be.equal(2);
  });
  // it('should change direction when hittin an edge', function() {

  // });


  describe('lineUp function', function() {
    it('should line things up on the left', function() {
      bouncyDancer.lineUp();
      expect(this.position[1]).to.be.equal(0);
    });

    xit('use jQuery .animate()');
  });
});
// Function lineUp

// Input: Click button

// key pieces: position paramters (top & left), move it to new position, need to stop step movement
// justification: move the dancers to left and halt any movement
// explanation: save this.position to this.savedPosition, save this.newPosition to this.savedNewPosition, and then set both to left 0 and top math.random()

// Output: moving bouncyDancer to left