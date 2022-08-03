(function () { 
  "use strict";

  angular.module("Data").service("MenuDataService", MenuDataService);

  MenuDataService.$inject = ["$http", "API"];

  function MenuDataService($http, API) {
    var menu = this;

    menu.getAllCategories = function () {
      return $http
        .get(API.basePath + API.get.categories)
        .then(function (response) {
          return response.data;
        });
    };

    menu.getItemsForCategory = function (categoryShortName) {
      return $http
        .get(API.basePath + API.get.items, {
          params: { category: categoryShortName },
        })
        .then(function (response) {
          return response.data.menu_items;
        });
    };
  }
})();
