(function () {
  "use strict";

  angular.module("MenuApp").component("categoriesComponent", {
    templateUrl: "src/menuapp/templates/categories.component.html",
    bindings: {
      categories: "<",
    },
  });
})();
