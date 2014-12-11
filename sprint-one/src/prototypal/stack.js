var Stack = function() {
  var stack = Object.create(stackMethods);
  stack.top = 0;
  stack.list= {};
  return stack;
};

var stackMethods = {};

stackMethods.push = function(value){
 var key =  this.top;
  this.list[key] = value;
  this.top++;
};

stackMethods.pop = function(){
  if(this.top) {
    this.top--;
    var key = this.top;
    var results = this.list[key];
    delete this.list[key];

    return results;
  } else{
    return;
  }
};

stackMethods.size = function(){
  return this.top;
};


