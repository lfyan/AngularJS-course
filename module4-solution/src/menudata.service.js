(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  var service = this;

  service.getAllCategories = function () {
     var categories = [];
     return $http({
       method: "GET",
       url: "https://davids-restaurant.herokuapp.com/categories.json"
     }).then(function (response) {
       var data = response.data;
       data.forEach(function(item){
         categories.push(item.short_name);
       });
       return categories;
     })

  }

  service.getItemsForCategory = function (categoryShortName) {
    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName
    }).then(function (response) {
      //console.log(response.data.menu_items);
      return response.data.menu_items;
    });

  };

}


})();
