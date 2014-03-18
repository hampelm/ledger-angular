/*jslint nomen: true */
/*globals require: true */

require.config({
  paths: {
    jquery: 'lib/jquery-1.10.0'
  },

  shim: {
    'lib/lodash': {
      exports: '_'
    }
  }
});

require(['jquery', 'lib/lodash', 'app'],
        function ($, _, logLevel, app) {
  'use strict';

  $(document).ready(function () {
    app.initialize();
  });
});
