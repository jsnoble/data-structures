// var Stack = function() {
//   // Hey! Rewrite in the new style. Your code will wind up looking very similar,
//   // but try not not reference your old code in writing the new style.
// };

var Stack = function(){
  var queue = {counter: 0};
  //queue.list = {1: "a", 2: "b"};
  queue.list = {};
  _.extend(queue, stackMethods);
  return queue;
};

var stackMethods = {};

stackMethods.push = function(value){
  var keyz = this.counter;

  this.list[keyz] = value ;
  this.counter++;

};
stackMethods.pop = function(){
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

stackMethods.size = function(){
  return this.counter;
};

