angular.module('app')
  .controller('acControllerCtrl', acControllerCtrl);

acControllerCtrl.$inject = ['$scope', 'equipmentService', '$route']

function acControllerCtrl($scope, equipmentService, $route) {
  $scope.global.curPage = 2;

  $scope.equipment = equipmentService.get({id: $route.current.params.acID});

  $scope.power = function() {
    $scope.equipment.status = 'AC_power_on_status';
    $scope.equipment.value = $scope.equipment.AC_power_on_status ? 0 : 1;
    $scope.equipment.timing = 0;
    $scope.equipment.$power()
  }
 }