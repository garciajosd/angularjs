(function () { 
  "use strict";

  angular.module("MenuApp").constant("API", {
    basePath: "https://davids-restaurant.herokuapp.com",
    get: {
      categories: "/categories.json",
      items: "/menu_items.json",
    },
  });
})();
