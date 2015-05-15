module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		concat: {   
			dist: {
				src: [
					'libraries/jquery-migrate/jquery-migrate-1.2.1.min.js', // jQuery Migrate
					'libraries/bootstrap/js/bootstrap.js', // Bootstrap 
					'libraries/bootstrap-accessibility/bootstrap-accessibility.min.js', // Bootstrap Accessibility
					'libraries/skrollr-master/src/skrollr.js', // Skroll Master
					'libraries/jquery-mousewheel/jquery.mousewheel.min.js', // Smooth Scroll
					'libraries/simplr-smoothscroll/lib/jquery.simplr.smoothscroll.min.js', // Smooth Scroll
					'js/dev.js'  // Main Script
				],
				dest: 'js/script.js',
			}
		},
		uglify: {
			build: {
				src: 'js/script.js',
				dest: 'js/script.min.js'
			}
		},
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/global.css': 'scss/global.scss'
				}
			} 
		},
		watch: {
			scripts: {
				files: ['js/dev*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['scss/*/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false,
				}
			}
		}
    });

    // 3. Where we tell Grunt we plan to use this plug-in.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
   grunt.registerTask('default');

};