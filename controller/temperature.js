angular.module('app')
  .controller('temperatureCtrl', temperatureCtrl);

temperatureCtrl.$inject = ['$scope', 'sensorService']

function temperatureCtrl($scope, sensorService) {
  $scope.global.curPage = 1;
  
  sensorService.query(function(data) {
    $scope.currentTemperature = data[0].latest_temperature;
    console.log( $scope.currentTemperature );
  })
}