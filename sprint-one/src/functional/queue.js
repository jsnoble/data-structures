var Queue = function(){
  var someInstance = {};

  var lineSize = 0;
  var back = 0;

  var storage = {};



  someInstance.enqueue = function(value){
    for(var i = 0; i < lineSize; i++){
      storage[i+1] = storage[i];
    }
    storage[0] = value;
    lineSize++;
  };

  someInstance.dequeue = function(){
    if(lineSize){
      lineSize--;
    }
      var result = storage[lineSize];
      delete storage[lineSize];
      return result;
  };

  someInstance.size = function(){
    return lineSize;

  };

  return someInstance;
};
