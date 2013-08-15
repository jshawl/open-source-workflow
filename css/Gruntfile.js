module.exports = function(grunt) {
  //initialize our Grunt configuration object
  grunt.initConfig({
  	//define a task named 'sass'
  	sass: {
  	  //output options
      dist: {
      	//compressed output
        options:{
          style:'compressed'
        },
        //compile style.scss to style.css
        files: {
          'css/style.css' : 'scss/style.scss'
        }
      }
    }
  });
  //load our plugin
  grunt.loadNpmTasks('grunt-contrib-sass');
  //register a default task
  grunt.registerTask('default', ['sass']);
};