angular.module('app')
  .controller('lightControllerCtrl', lightControllerCtrl);

lightControllerCtrl.$inject = ['$scope', 'equipmentService', '$route']

function lightControllerCtrl($scope, equipmentService, $route) {
  $scope.global.curPage = 2;
  $scope.equipment = equipmentService.get({id: $route.current.params.lightID});
  console.log($scope.equipment);
  $scope.power = function(delay) {
    delay = delay || 0;
    if($scope.equipment.light_power_on_status) {
        $scope.equipment.status = 'light_power_on_status';
        $scope.equipment.value = 0;
        $scope.equipment.timing = delay;
        $scope.equipment.$power();
        // $scope.equipment.$power({id: $scope.equipment.id, status: 'light_power_on_status', value: 0, timing: delay});
    }else {
        $scope.equipment.status = 'light_power_on_status';
        $scope.equipment.value = 1;
        $scope.equipment.timing = delay;
        $scope.equipment.$power();
        // $scope.equipment.$power({id: $scope.equipment.id, status: 'light_power_on_status', value: 1, timing: delay});
    }
  }
 }