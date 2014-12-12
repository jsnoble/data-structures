var Stack = function(){
  var queue = {};
  queue.counter= 0;
  queue.list = {};
  _.extend(queue, stackMethods);
  return queue;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.list[this.counter++] = value ;
};

stackMethods.pop = function(){
  if(this.size()){
    this.counter--;
  }
  var result = this.list[this.counter];
  delete  this.list[this.counter];
  return result;
};

stackMethods.size = function(){
  return this.counter;
};

