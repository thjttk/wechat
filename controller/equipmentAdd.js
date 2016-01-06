angular.module('app')
  .controller('equipmentAddCtrl', equipmentAddCtrl);

equipmentAddCtrl.$inject = ['$scope']

function equipmentAddCtrl($scope) {
  $scope.global.curPage = 4;
 }