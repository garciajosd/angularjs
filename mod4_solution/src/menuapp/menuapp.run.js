(function () {
  "use strict";

  angular.module("MenuApp").run(MenuAppRun);

  MenuAppRun.$inject = ["$rootScope"];

  function MenuAppRun($rootScope) {
    $rootScope.$on("$stateChangeSuccess", function (
      event,
      currentState,
      previousState
    ) {});
  }
})();
