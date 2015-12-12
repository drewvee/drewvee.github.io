// This is the proper way to start a javascript library
(function() {
  
  // This makes the arguments variable behave the way we want it to and a few
  // other things. For more info: 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
  'use strict';

  // This allows us to use our "_" anywhere. In a web browser, properties of window
  // are available everywhere without having to type "window."
  /* global _ */
  window._ = {};

  /**
   * START OF OUR LIBRARY!
   * Implement each function below it's instructions
   */

  /** _.identity()
   * Arguments:
   *   1) Anything
   * Objectives:
   *   1) Returns <anything> unchanged
   * Examples:
   *   _.identity(5) === 5
   *   _.identity({a: "b"}) === {a: "b"}
   */
  _.identity = function(bonkers_the_cat){
    return bonkers_the_cat;
  };
  
  

  /** _.first()
   * Arguments:
   *   1) An array
   *   2) A number
   * Objectives:
   *   1) If <array> is not an array, return []
   *   2) If <number> is not given or not a number, return just the first element in <array>.
   *   3) Otherwise, return the first <number> items of <array>
   * Gotchas:
   *   1) What if <number> is negative?
   *   2) What if <number> is greater than <array>.length?
   * Examples:
   *   _.first(["a","b","c"], 2) -> ["a", "b"]
   *   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
   */
_.first = function(arr, num){
    if (num === 0 || num < 0 || !Array.isArray(arr)) {
        return [];
    }
    if(!num || num === undefined ){
      return arr[0];
    }
    return arr.slice(0, num);
};

_.first2 = function(array, num){

if (num === undefined) {
    return array[0];
}

if (num === 0 || !Array.isArray(array)) {
  return [];
}

if (num > array.length) {
    return array;
}

if (num < array.length) {
    return array.slice(num-1);

  }  
};


  /** _.last()
   * Arguments:
   *   1) An array
   *   2) A number
   * Objectives:
   *   1) If <array> is not an array, return []
   *   2) If <number> is not given or not a number, return just the last element in <array>.
   *   3) Otherwise, return the last <number> items of <array>
   * Gotchas:
   *   1) What if <nubmer> is negative?
   *   2) What if <number> is greater than <array>.length?
    * Examples:
   *   _.last(["a","b","c"], 2) -> ["b","c"]
   *   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
   */
_.last = function(arr, len){
  if (len <= 0){
    return [];
  } else if(!len){
      return arr[arr.length -1];
  }
  if (len > arr.length){
        len = arr.length;
  }
  return arr.slice(arr.length-len ,arr.length);
};


_.last2 = function(array, num){


if (num === 0 || !Array.isArray(array)) {
  return [];
}
if (num === undefined) {
    return array[array.length-1];
}
if (num > array.length) {
    return array;
}
if (num < array.length) {
    return array.slice(num, array.length);

  }  
};

  /** _.each()
   * Arguments:
   *   1) A collection
   *   2) A function
   * Objectives:
   *   1) if <collection> is an array, call <function> once for each element
   *      with the arguments: 
   *         the element, it's index, <collection>
   *   2) if <collection> is an object, call <function> once for each property
   *      with the arguments:
   *         the property's value, it's key, <collection>
   * Gotchas:
   *   1) what if <function> is not a function?
   *   2) what if <collection> is not a collection?
    * Examples:
   *   _.each(["a","b","c"], function(e,i,a){ console.log(e0}); 
   *      -> should log "a" "b" "c" to the console
  */
_.each = function(coll, action){
  if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
          action(coll[i], i, coll);
      }
  } else if (typeof coll === "object"){
      for(var key in coll){
        action(coll[key], key, coll);
      }
  }  
};


// var friends = ["Mike", "Stacy", "Andy", "Rick"];

// friends._each(function (eachName, index){
// console.log(index + 1 + ". " + eachName); // 1. Mike, 2. Stacy, 3. Andy, 4. Rick.
// });

// _.each2 = function(coll, func)
//     if(Array.isArray(coll)){
//       for(var i = 0; i < coll.length; i++){
//           func(coll[i], i, coll);
//       }
//   } else if (typeof coll === "object"){
//   } 
//   };  
    
    
  /** _.indexOf()
   * Arguments:
   *   1) An array
   *   2) A value
   * Objectives:
   *   1) Return the index of <array> that is the first occurrance of <value>
   *   2) Return -1 if <value> is not in <array>
   *   3) Do not use [].indexOf()!
   * Gotchas:
   *   1) What if <array> has multiple occurances of val?
   *   2) What if <val> isn't in <array>?
    * Examples:
   *   _.indexOf(["a","b","c"], "c") -> 2
   *   _.indexOf(["a","b","c"], "d") -> -1
   */
_.indexOf = function(arr, val){
  for (var i = 0; i < arr.length; i++){
      if (val === arr[i]){
      return i;
   
      }
     }
   return -1;
  };
  

  /** _.filter()
   * Arguments:
   *   1) An array
   *   2) A function
   * Objectives:
   *   1) call <function> for each element in <array> passing the arguments:
   *      the element, it's index, <array>
   *   2) return a new array of elements for which calling <function> returned true
   * Gotchas:
   *   1) What if <function> returned something other than true or false?
   *   2) What if <array> is not an array?
   * Examples:
   *   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
   */

//     if(Array.isArray(arr)){
//       for(var i = 0; i < arr.length; i++){
//           func(arr[i], i, arr);
//            if (func(arr[i], i, arr) === true){
//         output.push(arr[i]);
//         }
//       }
//     return output;
//     }  
// };

_.filter2 = function(coll, test) {
    var passed = [];
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        if (test(coll[i], i, coll)) {
          passed.push(coll[i]);
        }
      }  
    } else { 
        for (var key in coll) {
          if (test(coll[key], key, coll)) {
            passed.push(coll[key]);
          }
        }
    }
    return passed;
};  

_.filter3 = function(coll, test) {
    var passed = [];
    _.each(coll, function(value) {
        if (test(value)) {
          passed.push(value);
        }
    });
    return passed;
};

_.filter = function(coll, test) {
    return _.reduce(coll, function(memo, element){
      if (test(element)) memo.push(element);
        return memo;
    }, []);
};


_.filter4 = function(coll, test){
  var output = [];
  _.each(coll, function(value) {
    if (test(value)) output.push(value);
  });
  return output;
};

  /** _.reject()
   * Arguments:
   *   1) An array
   *   2) A function
   * Objectives:
   *   1) call <function> for each element in <array> passing the arguments:
   *      the element, it's index, <array>
   *   2) return a new array of elements for which calling <function> returned false
   * Gotchas:
   *   1) What if <function> returned something other than true or false?
   *   2) What if <array> is not an array?
   * Examples:
   *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
   * Extra Credit:
   *   Use _.filter in your implementation (this is actually pretty easy)
   */
_.reject = function(arr, func){
      
      return _.filter(arr, function(value){
      return !func(value);
});
};

  /** _.uniq()
   * Arguments:
   *   1) An array
   * Objectives:
   *   1) return a new array of all elements from <array> with duplicates removed
   * Examples:
   *   _.uniq([1,2,2,4,5,5,2]) -> [1,2,4,5]
   */

_.uniq = function(arr){
    var uniqArr = [];
    for (var i= 0; i < arr.length; i++){
      if (_.indexOf(uniqArr, arr[i]) === -1) {
      uniqArr.push(arr[i]);
        
    }
 }  
    return uniqArr;
  
};


  /** _.map()
   * Arguments:
   *   1) An array
   *   2) a function
   * Objectives:
   *   1) call <function> for each element in <array> passing the arguments:
   *      the element
   *   2) save the return value of each <function> call in a new array
   *   3) return the new array
   * Gotchas:
   *   1) What if <function> is not a function?
   *   2) What if <array> is not an array?
   * Examples:
   *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
   */
_.map2 = function(arr, transform) {
    var output = [];
    if (Array.isArray(arr) && typeof func === "function"){
        for (var i = 0; i < arr.length; i++) {
            transform(arr[i]);
            output.push(transform(arr[i]));
          }
        }
        return output;
    };

_.map3 = function(coll, transform) {
    var output = [];
    _.each(coll, function(value) {
      output.push(transform(value));
    });
    return output;
};

_.map = function(coll, transform) {
    return _.reduce(coll, function(memo, element) {
        memo.push(transform(element));
          return memo;
    }, [])
};
    
    
    
    
  /** _.pluck()
   * Arguments:
   *   1) An array of objects
   *   2) A property
   * Objectives:
   *   1) Return an array containing the value of <property> for every element in <array>
   * Gotchas:
   *   1) What if <property> is not given?
   *   2) What if <array> is not an array?
   *   3) What if one of the elements doesn't have <property>?
   * Examples:
   *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
   * Bonus:
   *   Use _.map in your implementation
   */
_.pluck = function(arr, prop){
        return _.map(arr, function(element){
        return element[prop];
  });
};
  /** _.reduce()
   * Arguments:
   *   1) An collection
   *   2) A function
   *   3) A seed
   * Objectives:
   *   1) Call <function> for every element in <collection> passing the arguments:
   *       if <collection> is an array:
   *         previous result, current element, current element's index
   *       if <collection> is an object
   *         previous result, current index, current value
   *   2) Use the return value of <function> as the "previous result"
   *      for the next iteration
   *   3) On the very first iteration, use <seed> as the "previous result"
   *   4) After the last iteration, return the return value of the final <function> call
   * Gotchas:
   *   1) What if no <seed> is given?
   * Examples:
   *   _.reduce([1,2,3], function(prev, curr){ return prev + curr}) -> 6
   */
_.reduce = function(coll, iterator, seed){
      var i = 0;  
      if(seed === undefined){
        seed = coll[0];
        i = 1;
      }
        var memo = seed;
        for(i; i < coll.length; i++) {
          memo = iterator(memo, coll[i], i);
      } {
        (typeof coll === "object") 
          for(var key in coll) {
            memo = iterator(memo, key, coll[key]);
          }
        }
      return memo;
};

  /** _.contains()
   * Arguments:
   *   1) An array
   *   2) A value
   * Objectives:
   *   1) Return true if <array> contains <value>
   *   2) Return false otherwise
   * Gotchas:
   *   1) did you use === ?
   *   2) What if <array> is not an array?
   *   3) What if no <value> is given?
   * Examples:
   *   _.contains([1,"two", 3.14], "two") -> true
   */
_.contains = function(arr, val){
  
  if (Array.isArray(arr)){
    for(var i=0; i < arr.length; i++){
      if (val === arr[i]){
        return true;
      }
    }
  }
    return false;
};

// _.contains2 = function (coll, value) {
//   return _.reduce(coll, function(memo, element) {
//       return memo = memo !! ;
//   }, false);
// };


  /** _.every()
   * Arguments:
   *   1) A collection
   *   2) A function
   * Objectives:
   *   1) Call <function> for every element of <collection> with the paramaters:
   *      if <collection> is an array:
   *          current element, it's index, <collection>
   *      if <collection> is an object:
   *          current value, current key, <collection>
   *   2) If the return value of calling <function> for every element is true, return true
   *   3) If even one of them returns false, return false
   * Gotchas:
   *   1) what if <function> doesn't return a boolean
   * Examples:
   *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
   *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
   */
_.every3 = function(coll, func) {
  if(func === undefined){
    func = _.identity;
  }
  if (Array.isArray(coll)){
    for(var i=0; i < coll.length; i++){
      if(!func(coll[i], i, coll)){
        return false;
      } 
    }
    return true; 
  }
};


// _.every = function(coll, test) {
  
//   var result = false;
//   _.each(coll, function(value) {
//       if(test === undefined){
//       test = _.identity;
//       }
//       if(!test(value)) {
//       return result;
//       }
//   });
//   return true;
// };


_.every = function(coll, test) {
  return _.reduce(coll, function(memo, elem){
    return memo = (memo && (test(elem) == true));
  }, true);
};



  /** _.some()
   * Arguments:
   *   1) A collection
   *   2) A function
   * Objectives:
   *   1) Call <function> for every element of <collection> with the paramaters:
   *       if <collection> is an array:
   *        current element, it's index, <collection>
   *       if <collection> is an object:
   *        current value, current key, <collection>
   *   2) If the return value of calling <function> is true for at least one element, return true
   *   3) If it is false for all elements, return false
   * Gotchas:
   *   1) what if <function> doesn't return a boolean
   * Examples:
   *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
   *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
   */
_.some = function(coll, func){
  if(func === undefined){
      func = _.identity;
  }
  if (Array.isArray(coll)){
    for(var i=0; i < coll.length; i++){
      if(func(coll[i], i, coll)){
        return true;
      }
    }
  }
  return false;
};
  /** _.extend()
  * Arguments:
  *   1) An Object
  *   2) An Object
  * Objectives:
  *   1) Copy properties from <object 2> to <object 1>
  *   2) Do not overwrite properties that alread exist in <object 1>
  *   3) Return Object1 with the new properties
  * Examples:
  *   var data = {a:"one"};
  *   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
  *   _.extend(data, {a:"two"}); -> data now equals {a:"one"}
  */
_.extend = function(){
    for(var i = 1; i < arguments.length; i++){
      for (var key in arguments[i]){
        arguments[0][key] = arguments[i][key];
      }
    }
    return arguments[0];
};









// This is the proper way to end a javascript library
}());
