var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];
// {children: [{value: 5},{value: 6}]  }
  return newTree;

};

var treeMethods = {};

treeMethods.addChild = function(value){
  var node = {};
  node.children = [];
  _.extend(node, treeMethods);
  node.value = value;
  this.children.push(node);
};

treeMethods.contains = function(target){
 for(var i = 0; i < this.children.length; i++){
   if (this.children[i].value === target){
     return true;
   } if(this.children[i].children){
     for (var j = 0; j< this.children[i].children.length; j++ ){
       if(this.children[i].children[j].value === target){
         return true;
       }
     }
   }
 }

  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
