angular.module('app')
    .controller('fanControllerCtrl', fanControllerCtrl);

fanControllerCtrl.$inject = ['$scope', 'equipmentService', '$route']

function fanControllerCtrl($scope, equipmentService, $route) {
    $scope.global.curPage = 2;

    $scope.equipment = equipmentService.get({
        id: $route.current.params.fanID
    });

    $scope.update = function(type) {
    	$scope.equipment.function_key = type;
    	$scope.equipment.$control(function(data) {
    		if(data.retcode !== "0") {
    			alert(data.reason)
    		}
    		$scope.equipment = equipmentService.get({id: $route.current.params.fanID})
    	})
    }


}
