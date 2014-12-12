var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    if (list.tail === null){
      list.tail = Node(value);
      list.head = list.tail;
    } else {
    var temp = Node(value);
    list.tail.next = temp;
    list.tail = temp;
    }
  };

  list.removeHead = function(){
    var prevNode = list.head.value;
    var nextNode = list.head.next;
    delete list.head;
    list.head = nextNode;
    return prevNode;
  };

  list.contains = function(target){
    var thisNode = list.head;

    while (thisNode.next){
      if (thisNode.value === target){
        return true;
      } else {
        thisNode = thisNode.next;
      }
    }
    if(list.tail.value === target){
      return true;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
