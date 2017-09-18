(function () {
'use strict';

angular.module('public')
.controller('GetInfoController', GetInfoController);

GetInfoController.$inject = ['user', 'favoritedishDetail', 'favoritedishUrl'];
function GetInfoController(user, favoritedishDetail, favoritedishUrl) {
  var infoctrl = this;
  infoctrl.user = user;
  infoctrl.favoritedishDetail = favoritedishDetail;
  infoctrl.favoritedishUrl = favoritedishUrl;
  console.log(infoctrl.favoritedishUrl);
}

})();
