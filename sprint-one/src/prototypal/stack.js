var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.top = 0;
  stack.list= {};
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value){
  this.list[this.top++] = value;
};

stackMethods.pop = function(){
  if(this.top) {
    var results = this.list[--this.top];
    delete this.list[this.top];
    return results;
  }
};

stackMethods.size = function(){
  return this.top;
};


