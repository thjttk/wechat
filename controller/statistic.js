angular.module('app')
    .controller('statisticCtrl', statisticCtrl);

statisticCtrl.$inject = ['$scope']

function statisticCtrl($scope) {
    $scope.global.curPage = 3;

    $scope.temperatureData = {
        day0: 1,
        day1: 2,
        day3: 3,
        day4: 1
    };
    $scope.humidityData = {
        day0: 80,
        day1: 50,
        day3: 70,
        day4: 75
    };
    $scope.humidityOptions = {
        scaleOverride: true,
        scaleSteps: 10,
        scaleStepWidth: 10,
        scaleStartValue: 0
    }
}
