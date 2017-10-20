module.exports = function(grunt) 
{
	grunt.initConfig(
	{
		less: {
			default: {
				files: {
					'style.css': 'design.less'
				}
			}
		},
		
		watch:  {
			default: {
				files: [ '*.less' ],
				tasks: [ 'less:default' ]
			}
	    }

	});

	grunt.loadNpmTasks( 'grunt-contrib-less' );
	grunt.loadNpmTasks( 'grunt-contrib-watch' );

	grunt.registerTask( 'default', ['watch'] );
};