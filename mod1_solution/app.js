(function () {
  "use strict";

  angular
    .module("LunchCheck", [])
    .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.lunch = "";
    $scope.message = "";
    $scope.messageEmpty = "";
    $scope.messageStyle = "";

    $scope.displayMessage = function () {
      var quantity = items($scope.lunch);
      if (quantity >= 1 && quantity <= 3) {
        $scope.message = "Enjoy!";
      } else {
        $scope.message = "Too much!";
      }
      if (quantity == 0 && $scope.valueEmpty == true) {
        $scope.messageStyle = "option2";
        $scope.messageEmpty = "Please enter data first";
        $scope.message = "";
      } else if (quantity > 0 && $scope.valueEmpty == true) {
        $scope.messageStyle = "option1";
        $scope.messageEmpty = "NOT consider an empty item";
      } else {
        $scope.messageStyle = "option1";
        $scope.messageEmpty = "";
      }
    };

    function items(string) {
      var list = string.split(",");
      var total = 0;
      $scope.valueEmpty = false;
      for (var i = 0; i < list.length; i++) {
        if (list[i] != "") {
          total += 1;
        } else {
          $scope.valueEmpty = true;
        }
      }
      return total;
    }
  }
})();
