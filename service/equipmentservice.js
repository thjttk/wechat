angular
    .module('app')
    .factory('equipmentService', equipmentService);

equipmentService.$inject = ['$resource', 'API'];

function equipmentService($resource, API) {
    return $resource(API + 'equipment/:id', {
        id: '@id'
    }, {
        'control': {
            method: 'POST',
            url: API + 'control'
        },
    	'create': {
    		method: 'POST'
    	},
        'update': {
            method: 'PUT'
        }
    });
}
