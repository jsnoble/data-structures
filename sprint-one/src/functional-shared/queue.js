var Queue = function(){
  var queue = {};
  queue.head = 0;
  queue.tail = 0;
  queue.list = {};
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.list[this.tail++] = value;
};

queueMethods.dequeue = function(){
  var results = this.list[this.head];
  if (this.size()) {
    delete this.list[this.head];
    this.head++;
  }
    return results;

};

queueMethods.size = function(){
  return  this.tail - this.head;
};

