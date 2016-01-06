angular.module('app')
  .controller('statisticCtrl', statisticCtrl);

statisticCtrl.$inject = ['$scope']

function statisticCtrl($scope) {
  $scope.global.curPage = 3;
 }