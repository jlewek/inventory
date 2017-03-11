'use strict';

export function routeConfig($urlRouterProvider, $locationProvider, $httpProvider) {
  'ngInject';

  $urlRouterProvider.otherwise('/');

  $httpProvider.useApplyAsync(true);

  $locationProvider.html5Mode(true);
}
