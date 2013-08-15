module.exports = function(grunt) {
  //initialize our Grunt configuration object
  grunt.initConfig({
  	//the 'sass' task
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
    },
    // the 'watch' task
    watch: {
      //watch the scss directory
      scss: {
      	//watch any scss file
        files: 'scss/*.scss',
        //on any change, run the 'sass' task
        tasks: ['sass']
      }
    }
  });
  //load sass plugin
  grunt.loadNpmTasks('grunt-contrib-sass');
  //load watch plugin
  grunt.loadNpmTasks('grunt-contrib-watch');
  //make the default task 'watch', which watches and compiles Scss files
  grunt.registerTask('default', ['watch']);
};