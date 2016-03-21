angular.module('app')
  .controller('humidityCtrl', humidityCtrl);

humidityCtrl.$inject = ['$scope', 'sensorService', '$timeout']

function humidityCtrl($scope, sensorService, $timeout) {
  $scope.global.curPage = 2.5;

  $scope.trend = 0; // 0:stable, 1: going up, -1 :down
  var originalHumidity = 0;
  var humiditySetTo = 0;
  var timeout = null;
  var done = false;
  sensorService.query(function(data) {
      $scope.currentHumidity = data[0].latest_humidity;
      originalHumidity = $scope.currentHumidity;
      humiditySetTo = $scope.currentHumidity;
  });
  
  $scope.changeHumidity = function(isUp) {
    if(isUp) {
      $scope.currentHumidity = ++ humiditySetTo;
    }else {
      $scope.currentHumidity = -- humiditySetTo;
    }
    if(humiditySetTo > originalHumidity) {
      $scope.trend = 1;
    }else if(humiditySetTo === originalHumidity) {
      $scope.trend = 0;
    }else {
      $scope.trend = -1;
    }
    if (!done && timeout) {
        $timeout.cancel(timeout);
    }
    timeout = $timeout(function() {
        $scope.currentHumidity = originalHumidity;
        done = true;
    }, 2000);
    done = false;
  }

 }