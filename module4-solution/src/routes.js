(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider
  .state('home', {         // Home page
    url: '/',
    templateUrl: 'src/templates/home.template.html'
  })
  .state('categories', {     // category list page
    url: '/categories',
    templateUrl: 'src/templates/categorylist.template.html',
    controller: 'CategoriesController as listCtrl',
    resolve: {
      categoryArray: ['MenuDataService',
            function (MenuDataService) {
                return MenuDataService.getAllCategories();
      }]
    }
  })
  .state('items', {         // item list of a specific category
    url: '/items/{categoryShortName}',
    templateUrl: 'src/templates/itemslist.template.html',
    controller: 'ItemListController as itemListCtrl',
    resolve: {
      itemArray: ['$stateParams', 'MenuDataService',
          function ($stateParams, MenuDataService) {
            return MenuDataService.getItemsForCategory($stateParams.categoryShortName);
      }]
    }
  });

}

})();
