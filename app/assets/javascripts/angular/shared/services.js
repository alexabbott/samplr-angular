angular.module('myApp')

.service('api', function($http){

  return {

    getSamples: function(){
      // STATUS OF PROMISE: Fulfilled, Rejected, Pending
      var promise = $http.get('api/samples')
      .then(function(response) {
        return response;
      })

      return promise;

    },

    showSample: function(sampleID){
      // STATUS OF PROMISE: Fulfilled, Rejected, Pending
      var promise = $http.get('/api/samples/' + sampleID)
      .then(function(response) {
        return response;
      })

      return promise;

    },

    // CREATE sample
    addSample: function(sampleName, sampleUrl, sampleAudiofile, sampleCategory, sampleAfile){
      $http.post('api/samples', {name: sampleName, url: sampleUrl, audiofile: sampleAudiofile, category: sampleCategory, afile: sampleAfile });
    },

    // DELETE sample
    removeSample: function(sampleId) {
      $http.delete('api/samples/' + sampleId);
    },

    // EDIT sample
    editSample: function(sample) {
      $http.patch('api/samples/' + sample._id.$oid, {name: sample.name, url: sample.url, audiofile: sample.audiofile, category: sample.category, afile: sample.afile});
    }

}});