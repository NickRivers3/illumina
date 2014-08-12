module.exports = function(grunt) {

    // 1. All configuration goes here 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

		concat: {   
			dist: {
				src: [
					'js/libraries/jquery-migrate-1.2.1.min.js.js', // jQuery Migrate
					'bootstrap/js/bootstrap.js', // Bootstrap 
					'bootstrap/plugins/js/bootstrap-accessibility.min.js', // Bootstrap Accessibility
					'js/devlopment/script.js'  // Main Script
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
					'css/style.css': 'scss/global.scss'
				}
			} 
		},
		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['scss/*.scss'],
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