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
  var node = {value: value, right: null, left: null};
  var currentNode = this;
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
 

};
/*
 * Complexity: What is the time complexity of the above functions?
 */







