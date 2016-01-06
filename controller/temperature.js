angular.module('app')
  .controller('temperatureCtrl', temperatureCtrl);

temperatureCtrl.$inject = ['$scope']

function temperatureCtrl($scope) {
  $scope.global.curPage = 1;
  $scope.temp_value = 25;

  $scope.addTemp = function(temp_value)
  {
  	$scope.temp_value = temp_value + 1;
  	
  	console.log($scope.temp_value);
  }

  $scope.minusTemp = function(temp_value){
  	$scope.temp_value = temp_value - 1;
  	console.log($scope.temp_value);
  }
}