angular.module('app')
    .controller('statisticCtrl', statisticCtrl);

statisticCtrl.$inject = ['$scope', 'sensorService']

function statisticCtrl($scope, sensorService) {
    $scope.global.curPage = 3;

    $scope.humidityOptions = {
        scaleOverride: true,
        scaleSteps: 10,
        scaleStepWidth: 5,
        scaleStartValue: 10
    }
    $scope.temperatureOptions = {
    	scaleOverride: true,
        scaleSteps: 10,
        scaleStepWidth: 3,
        scaleStartValue: 10
    }

    sensorService.query(function(data) {
        var data = extractDataFromHistory(data[0]);
        $scope.temperatureData = data.temperature;
        $scope.humidityData = data.humidity;
    })

    function extractDataFromHistory(history) {
        var data = {
            temperature: {},
            humidity: {}
        };
        for (var key in history) {
            if (/^temperature_day\d$/.test(key)) {
                data.temperature[key] = history[key];
            } else if (/^humidity_day\d$/.test(key)) {
                data.humidity[key] = history[key];
            }
        }
        return data;
    }
}
