var should = require("chai").should();
var Animal = require(process.cwd() + '/lib/Animal');
var cp = require('child_process');

describe('Animal', function(){
  describe('constructor', function(){
    it('should return an animal object', function(){
      var animal = new Animal();

      animal.should.be.an('object');
      animal.should.be.an.instanceOf(Animal);
    })
    it('should be alive', function(){
      var animal = new Animal();
      animal.isAlive.should.be.true
    });
    it('should have 100% health', function(){
      var animal = new Animal();
      animal.health.should.equal(1);
    })
    it('should accept a type', function(){
      var cat = new Animal('cat');
      var dog = new Animal('dog');
      cat.type.should.equal('cat')
      dog.type.should.equal('dog')
    });
  });
  describe('#beCute()', function(){
    it('should make the animal cute', function(){
      var animal = new Animal();
      should.not.exist(animal.isCute)
      animal.beCute();
      animal.isCute.should.be.true
    })
    it('should be a prototype method', function(){
      var animal = new Animal();
      animal.should.respondTo('beCute');
      animal.should.not.have.ownProperty('beCute')
    })
  })
});

describe('#updateHealthStats()', function(){
  it('should change the health', function(){
    var animal = new Animal();
    animal.updateHealthStats();
    animal.health.should.not.equal(health);
  })
})

describe('CLI', function(){
  it('should thank me for downloading'){
    //execute node app.js then check output
  }
})

describe('Array', function(){
  describe('#filter()', function(){
    it('should return an array of items that return truthy in the inner fn', function(){
      var array = [1,2,3,4,5];
      var output = array.filter(function(item){
      return item % 2;
    })
      output.should.eql([1,3,5])
  });
});

  describe('#map()', function(){
    it('Return an array where each index is squared', function(){
      var array = [1,2,3,4,5];
      var output = array.map(function(item){
        return item * item;
      })
      output.should.eql([1,4,9,16,25])
    })
    it('should keep the same length', function(){
      var array = [1,2,3,4,5];
      var length = array.map(function(item){
        return false;
      }).length;
      length.should.equal(array.length);
    })
    it('should not mutate the original array', function(){
      var array = [1,2,3,4,5];
      array.map(function(){
        return false
      })
      array.should.eql([1,2,3,4,5]);
    })
  })
});






// describe('Tests', function() {
//   it('truthyness', function(){
//     true.should.equal(true);
//   })
// });
//good test to see if your testing framework is running


//change test type in package.json to mocha.  This allows you to run npm test in terminal to run the test


//describe blocks just group the tests together
//it blocks group assertions of the same type together.  All assertions must equal the same thing or test will fail


// var should = require("chai").should();

// describe('Array', function() {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present in the array', function () {
//       // assert.equal(-1, [1,2,3].indexOf(5));
//       [1,2,3].indexOf(5).should.equal(-1);
//       // assert.equal(-1, [1,2,3].indexOf(0));
//       [1,2,3].indexOf(0).should.equal(-1);
//     });
//   });
// });
