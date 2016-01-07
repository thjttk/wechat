// data: Object, key: x, value: y.
// options: Obect, keys: name, 

angular.module('app')
    .directive('lineChart', lineChart);

lineChart.$inject = [];

function lineChart() {
    return {
        restrict: 'E',
        scope: {
            data: '=',
            options: '='
        },
        templateUrl: 'directive/linechart.html',
        link: function(scope, element, attr) {
        	scope.options = scope.options || {};
        	scope.options.scaleBeginAtZero = true;
            Chart.defaults.global.scaleFontColor = '#fff';
            Chart.defaults.global.scaleLineColor = '#fff';
            Chart.defaults.global.scaleLineWidth = 1;
            // scope.options.onAnimationComplete = function() {
            //     this.showTooltip(this.datasets[0].points, true);
            // };
            var prepared = prepare(scope.data);
            var chartData = {
                labels: prepared.labels,
                datasets: [{
                    fillColor: scope.options.fillColor || "rgba(255,255,255,0.2)",
                    strokeColor: scope.options.strokeColor || "#fff",
                    pointColor: scope.options.pointColor || "#F26B5E",
                    pointStrokeColor: scope.options.pointStrokeColor || "#fff",
                    pointHighlightFill: scope.options.pointHighlightFill || "#fff",
                    pointHighlightStroke: scope.options.pointHighlightStroke || "#fff",
                    label: scope.options.name,
                    data: prepared.data
                }]
            };
            var ctx = element.children()[0].getContext('2d');
            var myline = new Chart(ctx).Line(chartData, scope.options);

            function prepare(raw) {
                var prepared = {
                    labels: [],
                    data: []
                }
                if (!angular.isObject(raw)) throw Error('should be object')
                for (key in raw) {
                    prepared.labels.push(key);
                    prepared.data.push(raw[key]);
                }
                return prepared;
            }
        }
    }
}
