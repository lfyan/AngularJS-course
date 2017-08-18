(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController ($scope) {
    $scope.inputString = "";
    $scope.message = "";

    var myStyle1 = {
      "color" : "green"
    }
    var myStyle2 = {
      "color" : "red"
    }

    $scope.checkInput = function () {
      if ($scope.inputString.length == 0) {
        $scope.message = "Please enter data first";
        $scope.myStyle = myStyle2;
        return;
      }

      var count = 0;
      var stringArray = $scope.inputString.split(',');
      for (var i = 0; i < stringArray.length; i++) {
        if (stringArray[i].replace(/\s/g, "").length != 0)
        count++;
      }
      //console.log(count);
      $scope.myStyle = myStyle1;
      if (count == 0)
      $scope.message = "0 item";
      else if (count <= 3)
      $scope.message = "Enjoy!";
      else
      $scope.message = "Too much!";
    };
  }

})();
