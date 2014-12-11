var Queue = function(){
  var queue = {counter: 0};
  //queue.list = {1: "a", 2: "b"};
  queue.list = {};
  _.extend(queue, queueMethods);
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value){
  var keyz = this.counter;

  this.list[keyz] = value ;
  this.counter++;

};
queueMethods.dequeue = function(){
  console.log("List: ", this.list); // var result = queue[counter];
  if(this.counter){
    this.counter--;
  }
  var c = this.counter;
  console.log(c);
  var result = this.list[c];

  console.log("Result:", result);
  delete  this.list[c];
  return result;
};

queueMethods.size = function(){
  return this.counter;
};

// var newQueue = Queue();
// newQueue.enqueue("a");