module.exports = function(grunt) {
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      src: ['build/**']
    },
    browserify: {
      ui: {
        options: {
          transform: [
            ['babelify', {
              loose: 'all'
            }]
          ]
        },
        files: {
          'build/app.js': ['src/ui/app.js']
        }
      }
    },
    copy: {
      ui: {
        files: [{
          cwd: 'src/ui',
          expand: true,
          flatten: true,
          src: '**',
          dest: 'build/'
        }]
      }
    },
    watch: {
      files: ['src/ui/**'],
      tasks: ['copy', 'browserify']
    }
  });

  grunt.registerTask('build', ['copy', 'browserify']);
  grunt.registerTask('default', ['build']);
};
