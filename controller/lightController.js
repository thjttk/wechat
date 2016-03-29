angular.module('app')
  .controller('lightControllerCtrl', lightControllerCtrl);

lightControllerCtrl.$inject = ['$scope', 'equipmentService', '$route']

function lightControllerCtrl($scope, equipmentService, $route) {
  $scope.global.curPage = 2;
  $scope.equipment = equipmentService.get({id: $route.current.params.lightID});
  console.log($scope.equipment);
  $scope.power = function(delay) {
    $scope.equipment.function_key = "switch";
    $scope.equipment.$control(function(data) {
      console.log( data == $scope.equipment );
      if(data.retcode === "0") {
        $scope.equipment = equipmentService.get({id: $route.current.params.lightID})
      }
    });

  }
 }