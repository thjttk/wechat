angular.module('app')
    .controller('temperatureCtrl', temperatureCtrl);

temperatureCtrl.$inject = ['$scope', 'sensorService', '$timeout']

function temperatureCtrl($scope, sensorService, $timeout) {
    $scope.global.curPage = 1;
    $scope.trend = 0; // 0:stable, 1: going up, -1 :down
    var originalTemp = 0;
    var tempSetTo = 0;
    var timeout = null;
    var done = false;
    sensorService.query(function(data) {
        $scope.currentTemperature = data[0].latest_temperature;
        originalTemp = $scope.currentTemperature;
        tempSetTo = $scope.currentTemperature;
    });
    
    $scope.changeTemp = function(isUp) {
      if(isUp) {
        $scope.currentTemperature = ++ tempSetTo;
      }else {
        $scope.currentTemperature = -- tempSetTo;
      }
      if(tempSetTo > originalTemp) {
        $scope.trend = 1;
      }else if(tempSetTo === originalTemp) {
        $scope.trend = 0;
      }else {
        $scope.trend = -1;
      }
      if (!done && timeout) {
          $timeout.cancel(timeout);
      }
      timeout = $timeout(function() {
          $scope.currentTemperature = originalTemp;
          done = true;
      }, 2000);
      done = false;
    }
  
}
