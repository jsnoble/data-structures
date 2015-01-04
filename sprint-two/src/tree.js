var Tree = function(value){
  var newTree = {value: value, parent: null,  children: []};
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var node = {value: value, parent: null, children: []};
  _.extend(node, treeMethods);
  node.parent = this;
  this.children.push(node);
};

treeMethods.removeFromParent = function(node){
  var current = node;
  var parent = node.parent;
  for(var i = 0; i < parent.children.length; i++){
    if(parent.children[i].value === current.value){
       parent.children[i] = undefined;
    }
  }
  current.parent = null;
  return current;
};

treeMethods.contains = function(target){
  var test = target;
  var testObj = this.children;

  function walkTree (value, node){

     for(var i = 0; i < node.length; i++){
       if(node[i].value === value){
         return true;
       }
       if(node[i].children.length > 0) {
          return walkTree (value, node[i].children);
       }
     }
    return false;
   }

  if(this.value === test){
    return true;
  } else {
    return walkTree(test, testObj);
  }
};


//};
//
//
///*
// * Complexity: What is the time complexity of the above functions?
// */
/*
obj = Tree(1)

obj.addChild(2)
obj.addChild(3)
obj.addChild(4)
var two = obj.children[2];
obj.removeFromParent(two);
*/

