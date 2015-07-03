var nature = angular.module("nature", ["ngRoute", "beastiary"])
  .config(["$routeProvider", function ($routeProvider){
  $routeProvider
    .when("/", {
      templateUrl: "partials/home.html"
    })
    .when("/beasts", {
      templateUrl: "partials/beast.html",
      controller: "MonsterController"
    })
    .when("/beasts/:index", {
      templateUrl: "partials/beast.html",
      controller: "MonsterController"
    })
    .when("/lore", {
      templateUrl: "partials/lore.html"
    });
}]);

// SEPARATE LINE YO //

nature.controller("MainController", function($scope) {
  $scope.boop = 1;
});
