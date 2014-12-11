var Queue = function() {
  this.head = 0;
  this.tail = 0;
  this.list = {};
};

Queue.prototype.enqueue = function(value){
  var key = this.tail;
  this.list[key] = value;
  this.tail++;
};

Queue.prototype.dequeue = function(){
  if(this.head < this.tail){
    var key = this.head;
    results = this.list[key];
    delete  this.list[key];
    this.head++;
    return results;
  }

};

Queue.prototype.size = function(){
  return this.tail - this.head;
};

var queue = new Queue();