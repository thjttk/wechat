angular.module('app')
    .controller('remoteAddCtrl', remoteAddCtrl);

remoteAddCtrl.$inject = ['$scope', 'equipmentService', '$location']

function remoteAddCtrl($scope, equipmentService, $location) {
    $scope.global.curPage = 2;
    $scope.type = "AC";
    $scope.add = function() {
        console.log($scope.location);
        if (!$scope.location || $scope.location.trim().length === 0) {
            alert('need descript')
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
