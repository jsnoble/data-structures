
var Graph = function(){
  this.nodes = [];
};

var Nod = function(value){
  this.value = value;
  this.edges = {};
};

Graph.prototype.addNode = function(node){
  var newNode = new Nod(node);
  this.nodes.push(newNode);
};

Graph.prototype.contains = function(node){
  var check = this.nodes;
  var values = _.pluck(check, 'value');
  return _.contains(values, node);

};

Graph.prototype.removeNode = function(node){
  var check = this.nodes;
  this.nodes =  _.reject(check, function(x){
    return x.value === node;
  });

};

Graph.prototype.hasEdge = function(fromNode, toNode){
  var tempArray = this.nodes;
  var first, second;

  tempArray.forEach(function(element){
    if (element.value === fromNode){
      first = element;

    }
    if (element.value === toNode){
      second = element;
    }
  });
  if (first.edges.hasOwnProperty(toNode) && second.edges.hasOwnProperty(fromNode)){
    return true;
  } else {
    return false;
  }
};

Graph.prototype.addEdge = function(fromNode, toNode){

   var tempArray = this.nodes;
   var first, second;

    tempArray.forEach(function(element){
      if (element.value === fromNode){
        first = element;
      }
       if (element.value === toNode){
        second = element;
      }
    });

    if (first && second){
      first.edges[toNode] = true;
      second.edges[fromNode] = true;
   }
};

Graph.prototype.removeEdge = function(fromNode, toNode){
     var tempArray = this.nodes;
   var first, second;

    tempArray.forEach(function(element){
      if (element.value === fromNode){
        first = element;
      }
       if (element.value === toNode){
        second = element;
      }
    });

    if (first && second){
      first.edges[toNode] = false;
      second.edges[fromNode] = false;
   }
};

Graph.prototype.forEachNode = function(cb){
  var array = this.nodes;
  _.each(array, function(element){
     cb(element.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


