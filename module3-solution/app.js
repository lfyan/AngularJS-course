(function () {
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'shoppingList.html',
    scope: {
      myItems: '<',
      onRemove: '&'
    }/*,
    controller: NarrowItDownController,
    controllerAs: 'narrowDown',
    bindToController: true,*/
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService'];
function NarrowItDownController (MenuSearchService) {
  var list = this;
  list.searchTerm = "";

  list.findTheItem = function () {
    if (list.searchTerm == null || list.searchTerm.length === 0) {
      return list.found = [];
    }

    var promise = MenuSearchService.getMatchedMenuItems(list.searchTerm);
    promise.then(function (response) {
      list.found = response;
    })
    .catch (function (error) {
      console.log("Something went terribly wrong.");
    });
  };

  list.removeItem = function (itemIndex) {
    list.found.splice(itemIndex, 1);
  };

}

MenuSearchService.$inject = ['$http'];
function MenuSearchService($http) {
  var service = this;

  service.getMatchedMenuItems = function (searchTerm) {
    var foundItems = [];

    return $http({
      method: "GET",
      url: "https://davids-restaurant.herokuapp.com/menu_items.json"
    }).then(function (response) {
      // process result and only keep items that match
      var menus = response.data.menu_items;
      // search for searchTerm
      for (var i = 0; i < menus.length; i++) {
        var description = menus[i].description;
        if (description.toLowerCase().indexOf(searchTerm) !== -1) {
          foundItems.push(menus[i]);
        }
      }
      return foundItems;
    });

  };

}

})();
