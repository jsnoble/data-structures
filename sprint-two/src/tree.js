var Tree = function(value){
  var newTree = {value: value, children: []};
  _.extend(newTree, treeMethods);
  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value){
  var node = {value: value, children: []};
  _.extend(node, treeMethods);

  this.children.push(node);

};

treeMethods.contains = function(target){
  var test = target;
  var collection = this.children;
   function walkTree (target, node){

     for(var i = 0; i < node.length; i++){

       if(node[i].value === target){

         return true;

       }
       if(node[i].children.length > 0) {
          return walkTree (test , node[i].children);
       } else {
         return false;
       }
     }
   }
  return walkTree(test, collection);

};


//};
//
//
///*
// * Complexity: What is the time complexity of the above functions?
// */
