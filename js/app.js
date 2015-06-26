var nature = angular.module("nature", ["ngRoute"])
  .config(["$routeProvider", function ($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "partials/home.html",
    })
    .when("/beasts", {
      templateUrl: "partials/beast.html"
    })
    .when("/lore", {
      templateUrl: "partials/lore.html"
    });
}]);

// SEPARATE LINE YO //

nature.controller("MainController", function($scope) {
  $scope.boop = 1;
});
