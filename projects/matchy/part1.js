var animal = {};
animal.species = "zebra";
animal["name"] = "George";
animal.noises = [];

console.log(animal);

var noises = [];
noises[0] = "neigh";
noises.push("hee haw");
noises.unshift("yawn");
noises.push("brrrr");
noises[noises.length] = "Hi";


console.log(noises.length);
console.log(noises[noises.length-1]);
console.log(noises);

animal.noises = noises;
console.log(animal);

var animals = [];
animals.push(animal);
var duck = {
            species : "duck",
            name : "Jerome",
            noises: ["quack", "honk", "sneeze", "woosh"]
};

animals.push(duck);

var lion = {
            species : "lion",
            name : "Simba",
            noises : ["roar", "growl", "purr"]
};

var wolf = {
            species : "wolf",
            name : "Fang",
            noises : ["bark", "woof", "whimper"]
};

animals.push(lion, wolf);


// The structure for the friend list will be an array. We chose this because arrays are naturally structured lists.

var friends = [];

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandom() {
    return animals[getRandomIntInclusive(0, animals.length)];

}

friends.push(getRandom());

wolf.friends = [];




// Create a function that take 1 parameter and returns an object
// Our one parameter is a string that is the name of an animal
// If that animal doesn't exist return null
// If it does exists return


function search(name){
    
    for (var i=0; i< animals.length; i++){
        if (animals[i].name === name){
            return animals[i];
        
        }
    }
    return null;
    
}

function edit(name, new_props){
    
    for (var i=0; i< animals.length ; i++){
        if (animals[i].name === name){
            animals[i] = new_props;
        }
    }
}


function remove(name){
    
    for (var i=0; i< animals.length ; i++){
        if (animals[i].name === name){
            animals.splice(i,1);
        }
    }
}

function create(animal_obj){
     if (animal_obj.name.length > 0 && animal_obj.species.length > 0) {
        if (search(animal_obj.name) === null){
         animals.push(animal_obj);
        }
     }
    // for (var i=0; i< animals.length; i++){
    //         if (animals[i].name !== animal_obj.name){
    //            
    //         } 
    //     }
    // }  return animals.push(animal_obj);   
}     


