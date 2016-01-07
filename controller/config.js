angular.module('app')
  .controller('configCtrl', configCtrl);

configCtrl.$inject = ['$scope', 'equipmentService']

function configCtrl($scope, equipmentService) {
  $scope.global.curPage = 4;

  $scope.equipments = equipmentService.query();

  
}