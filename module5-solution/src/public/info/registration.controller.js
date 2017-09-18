(function () {
'use strict';

angular.module('public')
.controller('RegistrationController', RegistrationController);


RegistrationController.$inject = ['MenuService'];
function RegistrationController (MenuService) {
  var reg = this;

  reg.submit = function () {
    reg.completed = true;

    var promise = MenuService.getFavoriteItem(reg.user.favoritedishshortname);
    promise.then(function (response) {
      reg.found = response;
      MenuService.saveUserInfo(reg.user.firstname, reg.user.lastname, reg.user.email, reg.user.phone, reg.user.favoritedishshortname, response);
      reg.error = false;
      reg.saved = true;
    })
    .catch (function (error) {
      console.log("Something went terribly wrong.");
      reg.error = true;
      reg.saved = false;
    });

  };
}

})();
