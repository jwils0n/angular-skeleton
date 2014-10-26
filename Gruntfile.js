module.exports = function (grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'src'
        }
      }
    },

    less: {
      dev: {
        options: {},
        files: {
          'src/.tmp/styles/main.css': 'src/styles/main.less'
        }
      }
    },

    watch: {
      js: {
        files: ['src/scripts/**/*.js'],
        tasks: [],
        options: {
          livereload: true,
        }
      },
      css: {
        files: ['src/styles/**/*.less'],
        tasks: ['less:dev'],
        options: {
          livereload: true,
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['connect', 'less:dev', 'watch']);
};