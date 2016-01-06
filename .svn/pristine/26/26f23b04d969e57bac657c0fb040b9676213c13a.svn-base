angular.module('app')
  .controller('humidityCtrl', humidityCtrl);

humidityCtrl.$inject = ['$scope']

function humidityCtrl($scope) {
  $scope.global.curPage = 2.5;
  $scope.humidityValue = 60;

  $scope.addHumidity = function(humidityValue)
  {
  	$scope.humidityValue = humidityValue + 1;
  	
  	console.log($scope.humidityValue);
  }

  $scope.minusHumidity = function(humidityValue){
  	$scope.humidityValue = humidityValue - 1;
  	console.log($scope.humidityValue);
  }

 }