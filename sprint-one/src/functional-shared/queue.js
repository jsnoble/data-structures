var Queue = function(){
  var queue = {head: 0, tail:0};
  queue.list = {};
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  var key= this.tail;
  this.list[key] = value;
  this.tail++;

};
queueMethods.dequeue = function(){
  var key = this.head;
  var results = this.list[key];
  delete this.list[key];
  this.head++;
  return results;
};

queueMethods.size = function(){
  var results = this.tail - this.head;
  if(results < 0){
    return 0;
  }
  return results;
};

