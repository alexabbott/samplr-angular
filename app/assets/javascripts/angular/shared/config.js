angular.module('myApp')

.config(function($stateProvider, $urlRouterProvider, $locationProvider, $sceDelegateProvider){

  // $locationProvider.html5Mode({enabled:true, requiredBase:true});

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'homeController'
    })

    .state('sample', {
      url: '/sample/:id',
      templateUrl: 'sample.html',
      controller: 'sampleController'
    });

  $sceDelegateProvider.resourceUrlWhitelist([
  // Allow same origin resource loads.
  'self',
  // Allow loading from our assets domain.  Notice the difference between * and **.
  'http://alex-abbott.com/**']);

});
