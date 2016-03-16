angular.module('app', ['ngRoute', 'ngTouch', 'ngResource'])
  .controller('appCtrl', appCtrl)
  .config(route)
  .run(changeTitle)
  .constant('API', 'http://139.196.202.91:8003/isteward/');

changeTitle.$inject = ['$rootScope'];
function changeTitle($rootScope) {
   $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
    });
}

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
      title: 'House Environment',
      templateUrl: 'view/temperature.html',
      controller: 'temperatureCtrl'
    })
    .when('/equipmentlist',{
      title: 'Remote Control',
      templateUrl: 'view/equipmentList.html',
      controller: 'equipmentListCtrl'
    })
    .when('/statistic',{
      title: 'History',
      templateUrl: 'view/statistic.html',
      controller: 'statisticCtrl'
    })
    .when('/humidity', {
      title: 'House Environment',
      templateUrl: 'view/humidity.html',
      controller: 'humidityCtrl'
    })
    .when('/acController/:acID', {
      title: 'Remote Control',
      templateUrl: 'view/acController.html',
      controller: 'acControllerCtrl'
    })
    .when('/lightController/:lightID', {
      title: 'Remote Control',
      templateUrl: 'view/lightController.html',
      controller: 'lightControllerCtrl'
    })
    .when('/equipmentAdd', {
      title: 'Settings',
      templateUrl: 'view/equipmentAdd.html',
      controller: 'equipmentAddCtrl'
    })
    .when('/config', {
      title: 'Settings',
      templateUrl: 'view/config.html',
      controller: 'configCtrl'
    })
    .when('/remoteAdd', {
      title: 'Remote Control',
      templateUrl: 'view/remoteAdd.html',
      controller: 'remoteAddCtrl'
    })
    .when('/remoteEdit', {
      title: 'Remote Control',
      templateUrl: 'view/remoteEdit.html',
      controller: 'remoteEditCtrl'
    })
    .otherwise('/temperature');
}