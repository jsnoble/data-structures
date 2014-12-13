var BinarySearchTree = function(value){

  var parent= Object.create(binarySearchMethods);
  parent.value = value;
  parent.left = null;
  parent.right = null;
  parent.allValues = [];
  parent.allValues.push(value);
  return parent;
};

var binarySearchMethods = {};


binarySearchMethods.insert = function(value){
  var node = {};
  var currentNode = this;
  node.value  = value;
  node.right = null;
  node.left = null;
  this.allValues.push(value);

var recursiveInsert = function(nodeVal){

  if(node.value >= currentNode.value ){
    if(!currentNode.right){
      currentNode.right = node;
    }
    else {
      currentNode = currentNode.right;
      recursiveInsert(nodeVal);
    }
  } else {

    if(!currentNode.left){
      currentNode.left = node;
    }
    else {
      currentNode = currentNode.left;
      recursiveInsert(nodeVal);
    }
  }
};

  recursiveInsert(currentNode);
};

binarySearchMethods.contains = function (value) {
  return _.contains(this.allValues, value);

};

binarySearchMethods.depthFirstLog = function (fn) {
  _.each(this.allValues, function(element){
    fn(element);
  });
  // body...
//depthFirstLog()
// start recursive walk tree #####accepts a function callback ######
// call function on node
// if right property exists
  //walk tree on right object (pass callback)-------^^^^^^^
// if left property exists
  //walk tree on left side  (pass callback)-----^^^^
// call walk tree recursive function on top node (pass callback)

};
/*
 * Complexity: What is the time complexity of the above functions?
 */
// prototypal
//instantiate the binary tree object with a value and left and right properties






