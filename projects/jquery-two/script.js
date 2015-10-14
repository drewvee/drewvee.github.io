

var avengers = ["Iron Man", "Thor", "Hulk", "Ant Man", "Wasp"];

var myUl = $("<ul id='avengers'></ul>");
$("body").append(myUl);

function assemble(arr){
    for(var i = 0; i < arr.length; i++){
        var new_li = $("<li>");
        new_li.text(arr[i]);
        new_li.addClass(arr[i].toLowerCase().replace(" ", "-"));
        myUl.append(new_li);
    }
}

assemble(avengers);

assemble(["Captian America"]);


// for (var i =0;i < avengers.length; i++){
//     setTimeout( (function(j){
//         return function(){
//             var avenger = [];
//             avenger.push(avengers[i]);
//             assemble(avenger);
//         };
//     })(i), 1000*i);
// }

// // With a previously defined function

// function iteratorLocker(jj){
//     return function(){
//         // console.log(jj);
//     }
// }

// for(var ii = 0; ii < 10; ii++){
//     setTimeout(iteratorLocker(ii), 500*ii);
// }


// //With an immediately invoked function
// for(var ii = 0; ii < 10; ii++){
//     setTimeout( (function(jj){
//         return function(){
//             // console.log(jj);
//         };
//     })(ii), 500*ii);
// }

//WRONG WAY
// for(var ii = 0; ii < 10; ii++){
//     console.log("Before:" + ii);
//     setTimeout(function(){
//         console.log(ii);
//     }, 500*ii);
//     console.log("After:" + ii);
// }

// console.log("Done looping:" + ii);


// $("#moveAvenger").on("click", function(){
//     $("#avengers").append($("#avengers li"[0]);
// });


var temp_text = "";    
$("#avengers li").hover(function(){
    temp_text = $(this).text();
    $(this).text("");
}, function(){
    $(this).text(temp_text);
});



