angular
    .module('app')
    .factory('sensorService', sensorService);

sensorService.$inject = ['$resource', 'API'];

function sensorService($resource, API) {
    return $resource(API + 'sensor_record/wwt', {
        id: '@id'
    },null);
}
