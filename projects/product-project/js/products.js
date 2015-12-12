/*global _ ko*/
$(document).ready(function() {
  // ALL YOUR CODE GOES BELOW HERE //

  window.productsVm = (function() {
    var _vm = {};

    var products = [];

    _vm.filteredProducts = ko.observableArray();

    _vm.productTypes = ko.observableArray([
      "Phones & Cases",
      "Phones",
      "Cases",
    ]);

    _vm.filterByType = function(data, e) {
      var selectedType = e.target.value;
      var typeValueToLookFor;
      switch (selectedType) {
        case "Cases":
          typeValueToLookFor = "case";
          break;
        case "Phones":
          typeValueToLookFor = "phone";
          break;
        default: // Phones & Cases
          // code

          return;
          break;
      }

      var productsFilteredByType = _.filter(products, function(p) {
        return p.type === typeValueToLookFor;
      });

      _vm.filteredProducts(productsFilteredByType);
    };

    _vm.filterForKeyword = function(data, e) {
      var term = e.target.value;
      var filtered = filterProductsByKeyword(term);
      _vm.filteredProducts(filtered);

    };

    function filterProductsByKeyword(term) {
      term = term.toLowerCase();
      return _.filter(products, function(p) {
        // return p.desc.toLowerCase().indexOf(term) > -1;
        var pKeys = Object.keys(p);
        var search = function(memo, key) {
          // already have positive result:
          if (memo === true) return true;

          // object case
          if (typeof p[key] === "object" && !Array.isArray(p[key]))
            return _.reduce(p[key], search, memo);

          // array case
          if (Array.isArray(p[key]))
            return _.reduce(p[key], search, memo);

          // everything else that isnt a string:
          if (typeof p[key] !== "string") return memo;

          // string case:
          return memo || (p[key].toLowerCase().indexOf(term) > -1);
        };
        return _.reduce(pKeys, search, false);


      });
    }


    _vm.init = function() {
      $.getJSON('data/product.json', function(loadedProducts) {
        products = loadedProducts;
        _vm.filteredProducts(products);
      });

      return _vm;
    };

    return _vm;
  })();

  // ALL YOUR CODE GOES ABOVE HERE //

});
