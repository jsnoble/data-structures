var Stack = function(){
  var queue = {counter: 0};
  queue.list = {};
  _.extend(queue, stackMethods);
  return queue;
};

var stackMethods = {};

stackMethods.push = function(value){
  var key = this.counter;
  this.list[key] = value ;
  this.counter++;

};
stackMethods.pop = function(){
  if(this.counter){
    this.counter--;
  }
  var key = this.counter;
  var result = this.list[key];

  delete  this.list[key];
  return result;
};

stackMethods.size = function(){
  return this.counter;
};

