module.exports = function(grunt) {
	
	// Configuration
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
		
		// CONCATENATE
		concat: {
			dist: {
				src: [
					'libraries/migrate/jquery-migrate-1.2.1.min.js',
					'libraries/bootstrap/js/bootstrap.js',
					'libraries/accessibility/bootstrap-accessibility.js',
					'js/script.js'
				],
				dest: 'js/build/production.js',
			}
		},
		
		// MINIFY
		uglify: {
			build: {
				src: 'js/build/production.js',
				dest: 'js/build/production.min.js'
			}
		},
		
		// SASS
		sass: {
			dist: {
				options: {
					style: 'compressed'
				},
				files: {
					'css/build/global.css': 'sass/global.scss'
				}
			} 
		},
		// OPTIMIZE
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'images/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'images/build/'
				}]
			}
		},
		
		// WATCH
		watch: {
			scripts: {
				files: ['js/*.js'],
				tasks: ['concat', 'uglify'],
				options: {
					spawn: false,
				},
			},
			css: {
				files: ['sass/*.scss'],
				tasks: ['sass'],
				options: {
					spawn: false;
				}
			},
			images: {
				files: ['images/**/*.{png,jpg,gif}', 'images/*.{png,jpg,gif}'],
				tasks: ['imagemin'],
				options: {
					spawn: false,
				}
			}
		}
	});
	
	// Load Tasks
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	
	// Tasks
	grunt.registerTask('default', ['watch']);

}
 
