angular
  .module('app')
  .factory('equipmentService', equipmentService);

  equipmentService.$inject = ['$resource', 'API'];

  function equipmentService($resource, API) {
    return $resource(API + 'equipment/:id');
    
    var cache = [
      {
        "type": "空调",
        "location": "客厅",
        "poweron": true,
        "temperature": 25,
        "heating":true,
        "wind": "中",
        "id":"1"
      },
      {
        "type": "空调",
        "location": "卧室1",
        "poweron": true,
        "temperature": 25,
        "heating":true,
        "wind": "中",
        "id": "2"
      },
      {
        "type": "电灯",
        "location": "客厅",
        "poweron": true,
        "id": "3"
      },
      {
        "type": "空调",
        "location": "卧室2",
        "poweron": false,
        "id": "4"
      }
   ];

    /*$http.get("http://" + url + "/light/1"
    ).success(function(response){
      $scope.poweronstatus = response;
    }).error(function(response){
      $scope.poweronstatus = response;
    })
    console.log($scope.poweronstatus);*/


    return {
      getEquipment: function() {
        return cache;
      }
    }


    
  }
