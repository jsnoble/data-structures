var LinkedList = function(){
  var list = {head: null, tail: null};

  list.addToTail = function(value){
    var node = {value: value, next: null};

    if (list.tail === null){
      list.tail = node;
      list.head = list.tail;
    } else {
      var temp = node;
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
