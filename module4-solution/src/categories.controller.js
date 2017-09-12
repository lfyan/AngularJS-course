(function () {
'use strict';

angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);

CategoriesController.$inject = ['response'];
function CategoriesController(response) {
  var list = this;
  list.categoryArray = response.data;
}

})();
