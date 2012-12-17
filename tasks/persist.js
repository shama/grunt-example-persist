/*
 * grunt-example-persist
 *
 * Copyright (c) 2012 Kyle Robinson Young
 * Licensed under the MIT license.
 */

module.exports = function(grunt) {
  'use strict';

  // libs
  var blackbox = require('blackbox');

  grunt.registerMultiTask('persist', 'Example task that persists data across child proceses.', function() {
    var done = this.async();
    var target = this.target;

    blackbox('servers', function(err, servers) {
      // Does servers exist?
      if (servers && servers[target]) {

        // Yep, the watch task must have ran me, let's reload
        // Im in a child process running a function on the parent!
        servers[target].reload(done);

      } else {

        // Nope, this must be the first run, let's create it
        grunt.log.ok('Creating Server: ' + target);
        servers = servers || {};
        servers[target] = {
          reload: function(done) {
            grunt.log.ok('Reloaded Server: ' + target);
            done();
          }
        };

        // Save the servers to the blackbox
        blackbox('servers', servers, done);

      }
    });
    
  });
};
