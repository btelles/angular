module.exports = function(grunt) {

  grunt.initConfig({
    watch: {
      files: ['journal.txt'],
      tasks: ['pat']
    }
  });
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('pat', function() {
    grunt.log.writeln('Keep going, you"re great!');
  });
}
