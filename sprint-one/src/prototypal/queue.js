var Queue = function() {
  var queue = Object.create(queueMethods);
  queue.list = {};
  queue.head = 0;
  queue.tail = 0;

  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  var key = this.tail;
  this.list[key] = value;
  this.tail++;
};

queueMethods.dequeue = function(){
  if (this.head < this.tail){
    var key = this.head;
    var result = this.list[key];
    delete this.list[key];
    this.head++;
    return result;
  } else {
    return;
 }
};

queueMethods.size = function(){

  return this.tail - this.head;
};



