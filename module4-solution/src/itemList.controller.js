(function () {
'use strict';

angular.module('MenuApp')
.controller('ItemListController', ItemListController);

ItemListController.$inject = ['itemArray'];
function ItemListController(itemArray) {
  var list = this;
  list.itemArray = itemArray;
}

})();
