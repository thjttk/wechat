angular
    .module('app')
    .factory('equipmentService', equipmentService);

equipmentService.$inject = ['$resource', 'API'];

function equipmentService($resource, API) {
    return $resource(API + 'equipment/:id', {
        id: '@id'
    }, {
        'update': {
            method: 'PUT'
        }
    });
}
