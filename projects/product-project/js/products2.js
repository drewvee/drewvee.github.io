$(document).ready(function() {
 // ALL YOUR CODE GOES BELOW HERE //
 
 
 $.getJSON('data/product.json', function(products) {
     console.log(products);
     
     var ul = $('<ul>')
     .attr('id', 'product-list');
   
   var listItems = $.map(products, function(product) {
     return $('<li>')
       .attr('id', 'product.id')
       .data('product', product)
       .addClass('product-item')
       .html(product.desc);
   });
   
   ul.append(listItems).appendTo('main');
   
  }).fail(function(error) {
     console.log("There's a problemo with yer product-JSON");
 });
 
 // ALL YOUR CODE GOES ABOVE HERE //

});

var $products = $('<ul>').appendTo(".container").addClass( "products" );
 
 
 $.getJSON("data/product.json", function(data) {
  //$(".container").css("background-color", "red");

   var page = $.map(data, function(product) {
  
   var $item = $('<li>').text("Item ID # "+ product.id).appendTo($products).addClass( "item" );
     $('<div>').text(product.desc).prependTo($item).addClass( "product-name" );
     
     