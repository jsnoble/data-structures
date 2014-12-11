var Stack = function() {
  this.top = 0;
  this.list = {};
};

Stack.prototype.push = function(value){
  var key = this.top;
  this.list[key] = value;
  this.top++;
};

Stack.prototype.pop = function(){
  if (this.top) {
    this.top--;
    var key = this.top;
    var result = this.list[key];
    delete this.list[key];
    return result;
  }
};

Stack.prototype.size = function(){
  return this.top;
};

var stack = new Stack();

