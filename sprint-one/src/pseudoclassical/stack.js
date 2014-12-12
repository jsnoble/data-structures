var Stack = function() {
  this.top = 0;
  this.list = {};
};

Stack.prototype.push = function(value){
  this.list[this.top++] = value;
};

Stack.prototype.pop = function(){
  if (this.top) {
    var result = this.list[--this.top];
    delete this.list[this.top];
    return result;
  }
};

Stack.prototype.size = function(){
  return this.top;
};

var stack = new Stack();

