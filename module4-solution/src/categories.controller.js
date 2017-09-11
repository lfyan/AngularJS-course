(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['categoryArray'];
function CategoriesController(categoryArray) {
  var list = this;
  list.categoryArray = categoryArray;
}

})();
