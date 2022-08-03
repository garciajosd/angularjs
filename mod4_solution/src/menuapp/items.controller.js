(function () { 
  "use strict";

  angular.module("MenuApp").controller("ItemsController", ItemsController);

  ItemsController.$inject = ["items", "category"];

  function ItemsController(items, category) {
    var itemsCategory = this;

    itemsCategory.items = items;
    itemsCategory.category = category;
  }
})();
