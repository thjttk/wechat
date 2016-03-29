angular.module('app')
    .controller('remoteEditCtrl', remoteEditCtrl);

remoteEditCtrl.$inject = ['$scope', 'equipmentService', '$location', '$route']

function remoteEditCtrl($scope, equipmentService, $location, $route) {
    $scope.global.curPage = 2;
    console.log($route.current.params.id);
    if($route.current.params.id) {
        $scope.remote = equipmentService.get({id: $route.current.params.id});
    } else {
        location.path('/equipmentlist');
    }

    $scope.delete = function() {
        if($scope.remote) {
            $scope.remote.$remove(function() {
                $location.path('/equipmentlist')
            });
        }
    }

    $scope.save = function() {
        var remote = $scope.remote;
        if($scope.remote) {
            $scope.remote.$update(function() {
                if(remote.type === 'ac') {
                    $location.path('/fanController/' + remote.id);
                }else {
                    $location.path('/lightController/' + remote.id);
                    
                }
            })
        }
    }
}
