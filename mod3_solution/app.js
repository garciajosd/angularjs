(function () {
  "use strict";

  angular
    .module("NarrowItDownApp", [])
    .controller("NarrowItDownController", NarrowItDownController)
    .service("MenuSearchService", MenuSearchService)
    .constant("ApiBasePath", "https://davids-restaurant.herokuapp.com")
    .directive("foundItems", FoundItems);

  function FoundItems() {
    var ddo = {
      templateUrl: "foundItems.html",
      scope: {
        list: "=items",
        remove: "&onRemove",
      },
    };

    return ddo;
  }

  NarrowItDownController.$inject = ["MenuSearchService"];
  function NarrowItDownController(MenuSearchService) {
    var menu = this;
    menu.error = false;

    menu.searchItems = function () {
      var promise = MenuSearchService.getMatchedMenuItems();

      promise
        .then(function (response) {
          menu.found = [];
          menu.error = true;
          var searchTerm = menu.searchTerm;
          if (searchTerm !== undefined) {
            if (searchTerm.length > 0) {
              menu.error = false;
              var items = response.data.menu_items;
              for (var i = 0; i < items.length; i++) {
                var description = items[i].description;
                if (
                  description
                    .toLowerCase()
                    .indexOf(searchTerm.toLowerCase()) !== -1
                ) {
                  menu.found.push(items[i]);
                }
              }
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    menu.removeItem = function (itemIndex) {
      menu.found.splice(itemIndex, 1);
      if (menu.found.length == 0) {
        menu.error = true;
      }
    };
  }

  MenuSearchService.$inject = ["$http", "ApiBasePath"];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;

    service.getMatchedMenuItems = function () {
      var response = $http({
        method: "GET",
        url: ApiBasePath + "/menu_items.json",
      });

      return response;
    };
  }
})();
