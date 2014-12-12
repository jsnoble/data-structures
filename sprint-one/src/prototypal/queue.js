var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.list = {};
  queue.head = 0;
  queue.tail = 0;
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  this.list[this.tail++] = value;
};

queueMethods.dequeue = function(){
  if (this.size()){
    var result = this.list[this.head];
    delete this.list[this.head++];
    return result;
  }
};

queueMethods.size = function(){
  return this.tail - this.head;
};



