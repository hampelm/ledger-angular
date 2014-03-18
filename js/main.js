/*jslint nomen: true */
/*globals require: true */

require.config({
  paths: {
    angular: 'lib/angular.min',
    jquery: 'lib/jquery-1.10.0'
  },

  shim: {
    'angular' : {'exports' : 'angular'}
  },

  priority: [
    'angular'
  ]
});

//http://code.angularjs.org/1.2.1/docs/guide/bootstrap#overview_deferred-bootstrap
window.name = "NG_DEFER_BOOTSTRAP!";

require(['angular', 'app'], function (angular, app) {
  'use strict';

  var $html = angular.element(document.getElementsByTagName('html')[0]);

  angular.element().ready(function() {
    angular.resumeBootstrap([app['name']]);
  });

});
