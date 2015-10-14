// $.merge

var a = [0,1,2];
var b = [3,4,5];
var c = [6,7,8];
    
var d = $.merge($.merge(a,b),c);
console.log (d);

// $.map

var numbers = [23, 44, 45, 1, 0, 700, 9001];

var evenNumbers = $.map(numbers, function(item, index){
   return item*2;
});

console.log(evenNumbers);

// $.filter

var greetings = ["hey", "hi", "hello", "yo"];

var shortGreetings = greetings.filter(function(value){
   return value.length === 2; 
});

console.log(shortGreetings);



$(function () {
  var oldGuardians = [
    {
      name: "Star Lord",
      notes: "Team leader"
    },
    {
      name: "Drax the Destroyer"
    },
    {
      name: "Adam Warlock"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Rocket",
      notes: "Served as temporary leader during Star-Lord's absence"
    },
    {
      name: "Gamora"
    }
  ];

  var newGuardians = [
    {
      name: "Mantis",
      notes: "Served as an advisor beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before becoming an active member."
    },
    {
      name: "Groot",
      notes: "Appeared as a sapling beginning in Guardians of the Galaxy vol. 2 #1 (July 2008); joined active team after fully regrowing."
    },
    {
      name: "Jack Flag"
    },
    {
      name: "Quasar",
      notes: "Changed name to Martyr in Guardians of the Galaxy vol. 2 #12 (May 2009)."
    },
    {
      name: "Cosmo the Spacedog",
      notes: "Assisted the team beginning in Guardians of the Galaxy vol. 2 #1 (July 2008) before officially joining team."
    },
    {
      name: "Major Victory",
      notes: "Also member of the alternate reality Guardians of the Galaxy team."
    },
    {
      name: "Bug"
    },
    {
      name: "Moondragon",
      notes: "Resurrected by Drax and Phyla-Vell."
    }
  ];
  
var allGuardians = $.merge(oldGuardians, newGuardians)
console.log(allGuardians)
  
var allNames = $.map(allGuardians, function(element, index){
    return element.name;
});  

console.log(allNames);  

var allFirstNames = $.map(allGuardians, function(element, index){
    return element.name.split(" ")[0];
});  

console.log(allFirstNames);

var noGroot = allFirstNames.filter(function(element, index){
    if (element === "Groot") return false;
    return true;
});
console.log(noGroot);

var each = function(coll, func){
  if(Array.isArray(coll)){
      for(var i = 0; i < coll.length; i++){
          func(coll[i], i, coll);
      }
  } else if (typeof coll === "object"){
      for(var key in coll){
        func(coll[key], key, coll);
      }
  }  
  
 function createTable(data) {
     
        var $tbl = $('<table/>');
        var $tr = $('<tr/>').appendTo($tbl);
     
     each(Object.keys(data[0]), function(key){
         $('<th/>')
         .attr('width', 70)
         .html(key[0].toUpperCase() + key.slice(1))
         .appendTo($tr);
     });
     
     each(data, function(key){
         $('<tr/>').appendTo($tbl);
         
     });
     
     each(data, function(value, key){
         $('<td/>');
         .html(value || "No data available")
         .appendTo($tr);        
     });
    });
    return $tbl;
    }
    $('body').append(createTable(contacts));

}
});