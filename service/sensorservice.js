angular
    .module('app')
    .factory('sensorService', sensorService);

sensorService.$inject = ['$resource', 'API'];

function sensorService($resource, API) {
    return $resource(API + 'sensor_record/1704234r524dftert34_34_werer878C', {
        id: '@id'
    },null);
}
