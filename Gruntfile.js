module.exports = function(grunt) {

  grunt.initConfig({
    
    watch: {
      files: ['**/*'],
      options: {
        livereload: true
      }
    },

    connect: {
      server: {
          options: {
	      open: true,
              port: 8080,
              base: '',
              // default:false, the server will shutdown after the task finishes
              // if a watch task is started later, it is not necessary to overide this default value
              keepalive: false,
              host: '0.0.0.0'
          }
      }
      
    }


  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');

 grunt.registerTask('default', ['connect', 'watch']);

};
