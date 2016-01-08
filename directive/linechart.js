// data: Object, key: x, value: y.
// options: Obect, keys: name, 

angular.module('app')
    .directive('lineChart', lineChart);

lineChart.$inject = ['$timeout'];

function lineChart($timeout) {
    return {
        restrict: 'E',
        scope: {
            data: '=',
            options: '='
        },
        templateUrl: 'directive/linechart.html',
        link: function(scope, element, attr) {
            scope.$watch('data', function(newV) {
                if (newV) {
                    $timeout(function() {

                        scope.options = scope.options || {};
                        scope.options.scaleBeginAtZero = true;
                        Chart.defaults.global.responsive = true;
                        Chart.defaults.global.scaleFontColor = '#fff';
                        Chart.defaults.global.scaleLineColor = 'rgba(255,255,255, 0)';
                        Chart.defaults.global.scaleLineWidth = 1;
                        // scope.options.onAnimationComplete = function() {
                        //     this.showTooltip(this.datasets[0].points, true);
                        // };
                        var prepared = prepare(scope.data);
                        var chartData = {
                            labels: ['day0', 'day1', 'day2', 'day3', 'day4', 'day5', 'day6'],
                            datasets: [{
                                fillColor: scope.options.fillColor || "rgba(255,255,255,0.2)",
                                strokeColor: scope.options.strokeColor || "#fff",
                                pointColor: scope.options.pointColor || "#F26B5E",
                                pointStrokeColor: scope.options.pointStrokeColor || "#fff",
                                pointHighlightFill: scope.options.pointHighlightFill || "#fff",
                                pointHighlightStroke: scope.options.pointHighlightStroke || "#fff",
                                label: scope.options.name,
                                data: prepared
                            }]
                        };
                        var ctx = element.children()[0].getContext('2d');
                        var myline = new Chart(ctx).Line(chartData, scope.options);

                        function prepare(raw) {
                            var prepared = [];
                            if (!raw) throw Error('cannot be null')
                            if (!angular.isObject(raw)) throw Error('should be object')
                            for (key in raw) {
                                prepared.push(raw[key]);
                            }
                            return prepared;
                        }
                    }, 0)
                }
            })

        }
    }
}
