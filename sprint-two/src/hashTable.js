var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var data = [k,v];

  if(this._storage.get(i)){
    this._storage.get(i).push(data);
  } else {
    this._storage.set (i , []);
    this._storage.get(i).push(data);
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);

 if(this._storage.get(i).length > 1){
  console.log("yeah");
   var results = this._storage.get(i);

   for(var j = 0; j < results.length; j++) {
     if(results[j][0] === k){
       return results[j][1];
     }
    }
 }
  return this._storage.get(i)[0][1];
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
    this._storage.set(i, []);
  this._storage.get(i).push([null,null]);

};



/*
 * Complexity: What is the time complexity of the above functions?
 */
