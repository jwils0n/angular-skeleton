module.exports = function (grunt) {
  grunt.initConfig({
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

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};