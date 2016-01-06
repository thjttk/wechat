angular.module('app')
  .controller('equipmentListCtrl', equipmentListCtrl);

equipmentListCtrl.$inject = ['$scope', 'equipmentService']

function equipmentListCtrl($scope, equipmentService) {
  $scope.global.curPage = 2;
  $scope.equipments = equipmentService.query();
  console.log( $scope.equipments );

 }



