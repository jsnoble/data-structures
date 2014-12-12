var Queue = function(){
  var someInstance = {};
  var tail = 0;
  var head = 0;

  someInstance.enqueue = function(value){
    someInstance[tail++] = value;
  };

  someInstance.dequeue = function(){
    var result = someInstance[head];
    if(someInstance.size()){
      delete someInstance[head++];
    }
    return result;
  };

  someInstance.size = function(){
    return tail - head;
  };

  return someInstance;
};
