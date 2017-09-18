(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://stormy-ridge-49570.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
