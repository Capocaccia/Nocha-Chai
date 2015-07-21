function Animal(type){
  this.isAlive = true;
  this.type = type;
};

Animal.prototype.beCute = function (){
  this.isCute = true
};

Animal.prototype.updateHealthStats = function(){
  // this.health = Math.random();

  // var self = this

  // setTimeout(function(){
  //   self.health = Math.random() * 100, 1000
  // }
}


module.exports = Animal;
