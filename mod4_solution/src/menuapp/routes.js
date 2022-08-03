(function () {
  "use strict";

  angular.module("MenuApp").config(RoutesConfig);

  RoutesConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise("/");

    // *** Set up UI states ***
    $stateProvider

      // Home page
      .state("home", {
        url: "/",
        templateUrl: "src/menuapp/templates/home.template.html",
      })

      // Categories page
      .state("categories", {
        url: "/categories",
        templateUrl: "src/menuapp/templates/categories.template.html",
        controller: "CategoriesController as allCategories",
        resolve: {
          categories: [
            "MenuDataService",
            function (MenuDataService) {
              return MenuDataService.getAllCategories();
            },
          ],
        },
      })

      // Items page
      .state("items", {
        url: "/items?category",
        templateUrl: "src/menuapp/templates/items.template.html",
        controller: "ItemsController as itemsCategory",
        resolve: {
          items: [
            "$stateParams",
            "MenuDataService",
            function ($stateParams, MenuDataService) {
              return MenuDataService.getItemsForCategory($stateParams.category);
            },
          ],
          category: [
            "$stateParams",
            function ($stateParams) {
              return $stateParams.category;
            },
          ],
        },
      });
  }
})();
