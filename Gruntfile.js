module.exports = function(grunt) {

  grunt.initConfig({
    files: "interesting.js",
    compile: "<%= files %>",
    moreComplicated: "<% _.forEach(files, function(file){ grunt.log.writeln(file)}) %>",
  });
  grunt.registerTask('pat', function() {
    grunt.log.writeln(grunt.config.get("compile"));
    grunt.log.writeln(grunt.config.get("moreComplicated"));
    grunt.log.writeln(grunt.template.process("<%= files %>"));
    grunt.log.writeln(grunt.template.today());
  });
}
