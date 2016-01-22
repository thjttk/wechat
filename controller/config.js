angular.module('app')
  .controller('configCtrl', configCtrl);

configCtrl.$inject = ['$scope', 'equipmentService']

function configCtrl($scope, equipmentService) {
  $scope.global.curPage = 4;

  $scope.equipments = equipmentService.query();

  $scope.delete = function(equipment) {
  	equipment.$delete(function() {
  		var index = $scope.equipments.indexOf(equipment);
  		$scope.equipments.splice(index, 1);
  	});
  }

  $scope.openAirkiss = function() {
  	wx.invoke('configWXDeviceWiFi', {}, function(res) {
  		alert(JSON.stringify(res))
  	})
  }

  
}