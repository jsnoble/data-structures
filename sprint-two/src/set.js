var Set = function(){
  var set = Object.create(setPrototype);
  set._storage = {};
  return set;
};

var setPrototype = {};

setPrototype.add = function(item){
  if(Object.prototype.toString.call(item).slice(8, -1) === 'Object'){
    var key = JSON.stringify(item);
    this._storage[key] = item;
  }
  this._storage[item] = item;
};

setPrototype.contains = function(item){
  if(Object.prototype.toString.call(item).slice(8, -1) === 'Object') {
    var key = JSON.stringify (item);
    return this._storage.hasOwnProperty(key);
  }
  return this._storage.hasOwnProperty(item);
};

setPrototype.remove = function(item){
  if(Object.prototype.toString.call(item).slice(8, -1) === 'Object') {
    var key = JSON.stringify (item);
     delete this._storage[key];
  }
  delete this._storage[item];
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
