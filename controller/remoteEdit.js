angular.module('app')
    .controller('remoteEditCtrl', remoteEditCtrl);

remoteEditCtrl.$inject = ['$scope', 'equipmentService', '$location']

function remoteEditCtrl($scope, equipmentService, $location) {
    $scope.global.curPage = 2;
    
}
