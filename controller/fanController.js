angular.module('app')
    .controller('fanControllerCtrl', fanControllerCtrl);

fanControllerCtrl.$inject = ['$scope', 'equipmentService', '$route']

function fanControllerCtrl($scope, equipmentService, $route) {
    $scope.global.curPage = 2;

    // $scope.equipment = equipmentService.get({
    //     id: $route.current.params.acID
    // });

    $scope.equipment = {
        id: 2,
        type: 'fan',
        location: 'bedroom'
    }

}
