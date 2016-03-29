angular.module('app')
    .controller('acControllerCtrl', acControllerCtrl);

acControllerCtrl.$inject = ['$scope', 'equipmentService', '$route']

function acControllerCtrl($scope, equipmentService, $route) {
    $scope.global.curPage = 2;

    $scope.equipment = equipmentService.get({
        id: $route.current.params.acID
    });

    $scope.power = function() {
	    $scope.equipment.timing = 0;
        $scope.equipment.status = 'AC_power_on_status';
        $scope.equipment.value = $scope.equipment.AC_power_on_status ? 0 : 1;
        $scope.equipment.$control()
    }

    $scope.changeTemp = function(isUp) {
        if (isUp) {
            $scope.equipment.value = ++$scope.equipment.temperature;
        } else {
            $scope.equipment.value = --$scope.equipment.temperature;
        }
        $scope.equipment.status = 'temperature';
	    $scope.equipment.timing = 0;

        $scope.equipment.$control();
    }
    $scope.changeMode = function() {
    	if($scope.equipment.heating) {
    		$scope.equipment.value = 0;
    	}else {
    		$scope.equipment.value = 1;
    	}
    	$scope.equipment.status = 'heating';
	    $scope.equipment.timing = 0;
    	$scope.equipment.$control();
    }
    $scope.changeWind = function() {
    	if($scope.equipment.wind_speed >= 3) {
    		$scope.equipment.value = 0;
    	}else {
    		$scope.equipment.value = $scope.equipment.wind_speed + 1;
    	}
    	$scope.equipment.status = 'wind_speed';
	    $scope.equipment.timing = 0;
    	$scope.equipment.$control();
    }
    $scope.changeFan = function() {
    	if($scope.equipment.wind_direction) {
    		$scope.equipment.value = 0;
    	}else {
    		$scope.equipment.value = 1;
    	}
    	$scope.equipment.status = 'wind_direction';
	    $scope.equipment.timing = 0;
    	$scope.equipment.$control();
    }
    $scope.changeTime = function(time) {
    	var sleep = time || 5;
    	if($scope.equipment.AC_power_on_status) {
    		$scope.equipment.value = 0;
    	}else {
    		$scope.equipment.value = 1;
    	}
    	$scope.equipment.status = 'AC_power_on_status';
	    $scope.equipment.timing = sleep;
    	$scope.equipment.$control();
    }
}
