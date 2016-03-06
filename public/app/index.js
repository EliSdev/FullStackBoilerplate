var angular = require('angular');
var router = require('angular-ui-router');

var app = angular.module('app', ['ui.router']);

require('./components')(app);
require('./shared')(app);

app.config([
  '$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        url: '/',
        template: require('./components/home/home.view.html'),
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .state('state1', {
        url: '/state1',
        template: '<p>State 1</p>'
      })
      .state('state2', {
        url: '/state2',
        template: '<p>State 2</p>'
      });

  }
]);
