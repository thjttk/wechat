angular.module('app')
  .controller('lightControllerCtrl', lightControllerCtrl)
  .config(['$httpProvider',function ($httpProvider) {
  $httpProvider.defaults.headers.common = {};
  $httpProvider.defaults.headers.post = {};
  $httpProvider.defaults.headers.put = {};
  $httpProvider.defaults.headers.patch = {};
  //delete $httpProvider.defaults.headers.common["X-Requested-With"];
}]);

lightControllerCtrl.$inject = ['$scope', 'equipmentService', '$route', '$http']

function lightControllerCtrl($scope, equipmentService, $route, $http) {
  $scope.global.curPage = 2;
  $scope.equipments = equipmentService.getEquipment();
  $scope.equipment = {type : '电灯' , location: '客厅'};
  $scope.poweronstatus = -1;
  $scope.lightstatus = -1;
  var serverURL = "http://182.254.211.15:80/poc2.0_demo/light/"


	console.log($route);
	//add a fake id, can be removed later after data is filled into.
	$route.current.params.lightID = 2;
  	console.log("select item: " + $route.current.params.lightID);
	

	$scope.PowerOnToogle = function(equipment){

	//read current power status
		$http.get(serverURL + $route.current.params.lightID
		).success(function(response){
			$scope.poweronstatus = response["PowerOnStatus"];
			$scope.feedback_msg = "Button Clicked!"; 
		}).error(function(response){
			$scope.poweronstatus = response["PowerOnStatus"];
			console.log("read power status error occurs");
		})
		console.log("current power on status: " + $scope.poweronstatus);

	//power off the light when power status is on.
		if($scope.poweronstatus){
			var lightactionmsg = {"status" : "power_off"}; 
		}else{
			var lightactionmsg = {"status" : "power_on"};
		}

	//perform power on/off actions
		$http.post(serverURL + $route.current.params.lightID, lightactionmsg
		).success(function(response){
			$scope.lightstatus = response["PowerOnStatus"];
		}).error(function(response){
			$scope.lightstatus = response["PowerOnStatus"];
			console.log("turn on/off the light failed");
		})
		console.log("updated lightstatus: " + $scope.lightstatus);

	/*$http(
		{
			method: 'POST',
			url: "http://10.239.52.96/light/1",
			data: {"status" : "power_off"},
			headers: { 'Content-Type': 'application/json; charset=utf-8'},
    	}).success(function(response){
			$scope.poweronstatus = response;
		}).error(function(response){
			$scope.poweronstatus = response;
		})
		console.log($scope.poweronstatus); */
	}

	$scope.PowerOff5MinToogle = function(equipment){
		
	}

	$scope.PowerOff10MinToogle = function(equipment){
		
	}

 }