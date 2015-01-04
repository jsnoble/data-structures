var LinkedList = function(){
  var list = {head: null, tail: null};

  list.addToTail = function(value){
    var node = {previous: null, value: value, next: null};

    if (list.tail === null){
      list.tail = node;
      list.head = list.tail;
    } else {
      node.previous =list.tail;
      list.tail.next = node;
      list.tail = node;

    }
  };

  list.removeHead = function(){
    var prevNode = list.head.value;
    var nextNode = list.head.next;
    delete list.head;
    list.head = nextNode;
    return prevNode;
  };

  list.addToHead = function(value){
    var node = {previous: null, value: value, next: null};
    node.next  = list.head;
    list.head = node;

  };

  list.removeTail = function(){
    var value = list.tail.value;
    var prevNode = list.tail.previous;
    delete list.tail;
    list.tail = prevNode;
    return value;
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

    if (list.tail.value === target){
      return true;
    }
    return false;
  };
  return list;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
