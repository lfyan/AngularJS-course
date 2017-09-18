(function () {
'use strict';

angular.module('public')
.controller('GetInfoController', GetInfoController);

GetInfoController.$inject = ['user'];
function GetInfoController(user) {
  var infoctrl = this;
  infoctrl.user = user;
  //console.log(user);
}

})();
