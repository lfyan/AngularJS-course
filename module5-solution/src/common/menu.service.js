(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var user = null;
  var favoritedishDetail =  null;
  var favoritedishUrl = null;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    var config = {};
    if (category) {
      config.params = {'category': category};
    }

    return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
      return response.data;
    });
  };

  service.getFavoriteItem = function (shortname) {
    return $http.get(ApiPath + '/menu_items/'+ shortname + '.json').then(function (response) {
      return response.data;
    });
  };

  service.saveUserInfo = function (firstname, lastname, email, phone, favoritedishshortname, response) {
    user = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        //favoritedishshortname: favoritedishshortname
      };
    console.log("saved!");

    favoritedishDetail = response;
    favoritedishUrl = ApiPath + '/images/' + favoritedishshortname + '.jpg';

  }

  service.getUser = function () {
    return user;
  }

  service.getFavoriteDishDetail = function () {
    return favoritedishDetail;
  }

  service.getFavoriteDishUrl = function () {
    return favoritedishUrl;
  }

}



})();
