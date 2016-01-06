angular.module('app', ['ngRoute', 'ngTouch', 'ngResource'])
  .controller('appCtrl', appCtrl)
  .config(route)
  .constant('API', 'http://182.254.211.15/poc3.0_demo/');


appCtrl.$inject = ['$scope']

function appCtrl($scope) {
  $scope.global = {
    curPage: 1
  };
}

route.$inject = ['$routeProvider'];
function route($routeProvider) {
  $routeProvider
    .when('/temperature', {
      templateUrl: 'view/temperature.html',
      controller: 'temperatureCtrl'
    })
    .when('/equipmentlist',{
      templateUrl: 'view/equipmentList.html',
      controller: 'equipmentListCtrl'
    })
    .when('/statistic',{
      templateUrl: 'view/statistic.html',
      controller: 'statisticCtrl'
    })
    .when('/humidity', {
      templateUrl: 'view/humidity.html',
      controller: 'humidityCtrl'
    })
    .when('/acController/:acID', {
      templateUrl: 'view/acController.html',
      controller: 'acControllerCtrl'
    })
    .when('/lightController/:lightID', {
      templateUrl: 'view/lightController.html',
      controller: 'lightControllerCtrl'
    })
    .when('/equipmentAdd', {
      templateUrl: 'view/equipmentAdd.html',
      controller: 'equipmentAddCtrl'
    })
    .when('/config', {
      templateUrl: 'view/config.html',
      controller: 'configCtrl'
    });
}