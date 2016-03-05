angular.module('Enruta.controllers.Main', [])

.controller('MainController', function($scope){
 $scope.counter = 1;
    $scope.greeting = "Hello World";
$scope.prueba = function(){

 alert("hola");

}



});
