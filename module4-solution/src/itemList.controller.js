(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);

ItemListController.$inject = ['response'];
function ItemListController(response) {
  var list = this;
  list.itemArray = response.data.menu_items;
  list.category = response.data.category;
}

})();
