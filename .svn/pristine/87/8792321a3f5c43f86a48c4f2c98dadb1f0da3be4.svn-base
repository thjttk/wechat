angular.module('app')
  .controller('acControllerCtrl', acControllerCtrl);

acControllerCtrl.$inject = ['$scope', 'equipmentService', '$route']

function acControllerCtrl($scope, equipmentService, $route) {
  $scope.global.curPage = 2;
  $scope.equipments = equipmentService.getEquipment();
  $scope.equipment = {type : '空调' , location: '卧室'};
  console.log($route);
  console.log($route.current.params.acID);

 }