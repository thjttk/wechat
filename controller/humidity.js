angular.module('app')
  .controller('humidityCtrl', humidityCtrl);

humidityCtrl.$inject = ['$scope', 'sensorService']

function humidityCtrl($scope, sensorService) {
  $scope.global.curPage = 2.5;
  sensorService.query(function(data) {
    $scope.currentHumidity = data[0].latest_humidity;
    console.log( $scope.currentHumidity );
  })

 }