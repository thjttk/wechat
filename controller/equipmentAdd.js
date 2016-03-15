angular.module('app')
    .controller('equipmentAddCtrl', equipmentAddCtrl);

equipmentAddCtrl.$inject = ['$scope', 'equipmentService', '$location']

function equipmentAddCtrl($scope, equipmentService, $location) {
    $scope.global.curPage = 4;
    $scope.type = "AC";
    $scope.add = function() {
        console.log($scope.location);
        if (!$scope.location || $scope.location.trim().length === 0) {
            alert('need description')
            return;
        }
        equipmentService.create({
            type: $scope.type,
            location: $scope.location
        }, function() {
            $location.path('/config')
        });
    }
}
