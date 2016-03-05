angular.module('Enruta', [
  'ngRoute',
  'mobile-angular-ui',
  'Enruta.controllers.Main'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {templateUrl:'home.html',  reloadOnSearch: false});
});
