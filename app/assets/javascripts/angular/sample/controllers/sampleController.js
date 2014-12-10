angular.module('myApp')

// sample CONTROLLER
.controller('sampleController',['$stateParams','$scope', 'api' ,function($stateParams, $scope, api) {
  $scope.showSample = function(){
    api.showSample($stateParams.id)
    .then(function(data){
      $scope.sample = data.data;
    });
  };

}]);