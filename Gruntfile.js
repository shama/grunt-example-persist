/*
 * grunt-contrib-watch
 * http://gruntjs.com/
 *
 * Copyright (c) 2012 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 * https://github.com/gruntjs/grunt-contrib-watch/blob/master/LICENSE-MIT
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Watch
    watch: {
      all: {
        files: ['<%= jshint.all %>'],
        // Upon file change, run persist to reload servers
        tasks: ['jshint', 'persist'],
      }
    },

    persist: {
      server1: {},
      server2: {}
    },

    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

  });

  grunt.loadTasks('tasks');

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // On first run, run persist to register servers and then watch
  grunt.registerTask('default', ['jshint', 'persist', 'watch']);

};
