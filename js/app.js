/*globals define: true */

define([
  'angular',
  'controllers',
  'services'
  ], function (angular) {
    'use strict';

    return angular.module('ledgerApp', [
      'ledgerApp.controllers'
    ]);
});
