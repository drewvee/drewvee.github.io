
function objectValues(obj) {
  var values = Object.keys(obj);
  var valArr = [];
  for (var i = 0; i < values.length; i++) {
      valArr.push(obj[values[i]]);
  }
  return valArr;
}



function keysToString(obj) {
    var keys = Object.keys(obj);
    var keySpace = keys.join(" ");
    return keySpace;
}
























// function objectValues(object){
//     var keys = Object.keys(object)
//     var vals = [];
//     for(var i = 0; i < keys.length; i++){
//       vals.push(object[keys[i]]);
//     }
//     return vals;
// }

// function keysToString(object){
//     var keys = Object.keys(object);
//     var keysSpace = keys.join(" ");
//     return keysSpace;
// }

function valuesToString(object){
    var vals = objectValues(object);
    

    var filteredVals = vals.filter(function (v) {
         return typeof v === "string";
    });
    
    var valsSpace = filteredVals.join(" ");
    return valsSpace;
}



function arrayOrObject(object){
    if (Array.isArray(object)) {
    return "array"; 
}   else { 
    return "object"

    }
}


function capitalizeWord(string){
    var word = string.charAt(0).toUpperCase();
    var rest = string.slice(1);
    var capWords = word + rest;
    return capWords 
}



function capitalizeAllWords(string){
    var splitStr = string.split(" ");
    
    for(var i = 0; i < splitStr.length; i++) {
        splitStr[i] = capitalizeWord(splitStr[i]);
    
}
    // var splitStrNew = splitStr.join(" ");
    return splitStr.join(" ");
    }



function welcomeMessage(object){
    var welcome = "Welcome " + capitalizeWord(object.name) + "!";
    return welcome;
}


function profileInfo(object){
    var profInfo = capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
    return profInfo;
}


function maybeNoises(object){
    var mybNoises = object.noises;
    if (mybNoises === undefined){ 
       return "there are no noises";
        
    } else if (mybNoises.length > 0) {
       return object.noises.join(" ");
       
    
        
    } else if (mybNoises.length === 0) {
       return "there are no noises";
    }
    
}


function hasWord(string, check){
    var strArray = string.split(" ");
    //strArray.indexOf(check);
    if (strArray.indexOf(check) >= 0){
        return true
    
        
    } else {
        
        return false
    }
}

function addFriend(string, object){
    var addsFr = object.friends
    addsFr.push(string);
    return object;
}


function isFriend(string, object){
    var isFr = object.friends
     if (isFr === undefined){ 
       return false;
     }  
     if (isFr.indexOf(string) >= 0){
    return true;
    
}  else {
       return false
    }
}
function nonFriends(name, people){
    var non_friends = [];
    for(var i =0; i < people.length; i++) {
    if(!isFriend(name,people[i])){ 
        if (people[i].name !== name) {
        non_friends.push(people[i].name)
    }
}
}
    return non_friends;
}
// function nonFriend(string, array){
//     data[0].friends
// }


function updateObject(object, key, value) {
    object[key] = value;
    
    return object;
}

function removeProperties(obj, array) {
   
   var newObj = Object.keys(obj);

   for(var i =0; i < newObj.length; i++){
    if (array.indexOf(newObj[i]) >= 0){
        delete obj[newObj[i]];
    }    
}

    return obj;
}




//     if (array.indexOf(newObj[i]) === -1){
//         outputObj[newObj[i]] = obj[newObj[i]];
//     }
//   }
//   return outputObj;
// }

function dedup(array) {
 
 var arrayResult = []
 for (var i= 0; i < array.length; i++){
 
     if ((arrayResult.indexOf(array[i])) === -1) {
    arrayResult.push(array[i]);
        
    }
 }  
    return arrayResult;
  
}


