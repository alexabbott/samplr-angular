angular.module('myApp')

.controller('homeController', function($location, $scope, api) {
  api.getSamples()
  .then(function(data){
    $scope.samples = data.data;
  });

  $scope.addSample = function(henry){
    api.addSample(henry.name, henry.url, henry.audiofile, henry.category, henry.afile);
    // CLEAR the input after add sample
    $scope.samples.push(henry);
    $scope.sampleName="";
    $scope.sampleUrl="";
    $scope.sampleAudiofile="";
    $scope.sampleAfile="";
    $scope.sampleCategory="";
  };

});