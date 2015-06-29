module.exports = function (grunt) {
	
	require('load-grunt-tasks')(grunt);
	
	grunt.initConfig({
		//компиляция less
		less: {
			style: {
				files: {
					'app/css/style.css' : ['app/less/common.less']
				}
			},
			bootstrapLess: {
				files: {
					'app/css/bootstrap-style.css' : ['app/less-bootstrap/bootstrap.less']
				}
			}
		},
		//автопрефиксер
		autoprefixer: {
			options: {
				browsers: ['last 2 versions', 'ie 8']
			},
			style: {
				src: 'app/css/style.css'
			},
			bootstr: {
				src: 'app/css/bootstrap-style.css'
			}
		},
		//комбинирует медиа-выражения
		cmq: {
			style: {
				files: {
					'app/css/style.css' : ['app/css/style.css']
				}
			}
		},
		//минимизирует стилевой файл
		cssmin: {
			style: {
				options: {
					KeepSpecialComments: 0,
					report: 'gzip'
				},
				files: {
					'build/css/style.min.css' : ['build/css/style.css']
				}
			}
		},
		//делает стилевой файл красивым
		csscomb: {
			style: {
				files: {
					'app/css/style.css' : ['app/css/style.css']
				}
			}
		},
		//минимизирует изображения
		imagemin: {
			build: {
				options: {
					optimizationLevel: 3
				},
				files: [{
					expand: true,
					src: ['app/images/**/*.{png, jpg, gif, svg}']
				}]
			}
		},
		//минимизирует html-файлы
		htmlmin: {
			options: {
				removeComments: true,
				collapseWhitespace: true,
				collapseBooleanAttributes: true,
				caseSensitive: true,
				keepClosingSlash: true
			},
			build: {
				files: {
					'build/index.html' : 'build/index.html'
				}
			}
		},
		//очистка папки проекта
		clean: {
			build: ['build']
		},
		//копирование файлов в папку проекта
		copy: {
			build: {
				files: [{
					expand: true,
					cwd: 'app/',
					src: [
						'css/**',
						'images/**',
						'scripts/**',
						'fonts/**'
					],
					dest: 'build'
				}]
			},
			//копирование только нужных html-файлов
			build_html: {
				files: [{
					expand: true,
					cwd: 'app/html/',
					src:['*.html'],
					dest: 'build'
				}]
			}
		},
		//работа с jade-файлами
		jade: {
			//основные файлы
			temp: {
				options: {
					pretty: true
				},
				files: [{
					expand: true,
					cwd: 'app/jade/pages/',
					src: ['*.jade'],
					dest: 'app/html/',
					ext: '.html',
					extDot: 'last'
				}]
			}
		},
		//замена пробелов табами в html-файлах
		prettify: {
			options: {
				indent: 1,
				indent_char: '	'
			},
			html: {
				expand: true,
				cwd: 'app/html',
				ext: '.html',
				src: '**/*.html',
				dest: 'app/html'
			}
		},
		//запуск автоматических функций
		watch: {
			//компилятор less и автопрефиксер
			styles: {
				files: ['app/less/**/*.less'],
				tasks: ['less:style', 'autoprefixer'],
				options: {
					spawn: false
				}
			},
			//компилятор jade
			jades: {
				files: ['app/jade/**/*.jade'],
				tasks: ['jade'],
				options: {
					spawn: false
				}
			}
		},
		//минимизатор JS
		uglify: {
			build: {
				src: 'build/js/js.js',
				dest: 'build/js/js.min.js'
			}
		},
		//замена относительных адресов
		replace: {
			build: {
				options: {
					patterns: [{
						match: /src="..\//g,
						replacement: 'src="'
					}, {
						match: /href="..\//g,
						replacement: 'href="'
					}, {
						match: /..\/images/g,
						replacement: 'images'
					}]
				},
				files: [{
					expand: true,
					flattern: true,
					src: ['build/*.html']
				}]
			}
		},
		sprite: {
			normal: {
				src: 'images/sprite/sprite/*.png',
				destImg: 'images/spritesheet.png',
				destCSS: 'less/spritestyles.less',
				padding: 2,
				cssTemplate: function (params) {
					var result = '.sprite {display: inline-block; background-image: url(../img/spritesheet.png); background-repeat: no-repeat;}';
					for (var i = 0, ii = params.items.length; i < ii; i += 1) {
						result += '.sprite_icon-' + params.items[i].name + '{' +
							'background-position: ' + params.items[i].px.offset_x + ' ' + params.items[i].px.offset_y + ';' +
							'width: ' + params.items[i].px.width + ';' +
							'height: ' + params.items[i].px.height + ';' +
							'}\n'
					}
					return result;
				}
			},
			large15: {
				src: 'images/sprite/sprite@1.5x/*.png',
				destImg: 'images/spritesheet@1.5x.png',
				destCSS: 'less/spritestyles@1.5x.less',
				padding: 3,
				cssTemplate: function (params) {
					var result = '.sprite {display: inline-block; background-image: url(../img/spritesheet@1.5x.png); background-repeat: no-repeat;}';
					result += '@media only screen and (-webkit-min-device-pixel-ratio: 1.5), only screen and (min--moz-device-pixel-ratio: 1.5), only screen and (-o-min-device-pixel-ratio: 3/2), only screen and (min-device-pixel-ratio: 1.5), only screen and (min-resolution: 144dpi), only screen and (min-resolution: 1.5dppx) {\n';
					for (var i = 0, ii = params.items.length; i < ii; i += 1) {
						result += '.sprite_icon-' + params.items[i].name + '{' +
							'background-position: ' + params.items[i].offset_x/1.5 + 'px ' + params.items[i].offset_y/1.5 + 'px;' +
							'background-size: ' + params.items[i].total_width/1.5 + 'px ' + params.items[i].total_height/1.5 + 'px;' +
							'width: ' + params.items[i].width/1.5 + 'px;' +
							'height: ' + params.items[i].height/1.5 + 'px;' +
							'}\n'
					}
					result += '}';
					return result;
				}
			},
			large2: {
				src: 'images/sprite/sprite@2x/*.png',
				destImg: 'images/spritesheet@2x.png',
				destCSS: 'less/spritestyles@2x.less',
				padding: 4,
				cssTemplate: function (params) {
					var result = '.sprite {display: inline-block; background-image: url(../img/spritesheet@2x.png); background-repeat: no-repeat;}';
					result += '@media only screen and (-webkit-min-device-pixel-ratio: 2), only screen and (-min--moz-device-pixel-ratio: 2), only screen and (-o-min-device-pixel-ratio: 2/1), only screen and (min-device-pixel-ratio: 2), only screen and (min-resolution: 192dpi), only screen and (min-resolution: 2dppx) {\n';
					for (var i = 0, ii = params.items.length; i < ii; i += 1) {
						result += '.sprite_icon-' + params.items[i].name + '{' +
							'background-position: ' + params.items[i].offset_x/2 + 'px ' + params.items[i].offset_y/2 + 'px;' +
							'background-size: ' + params.items[i].total_width/2 + 'px ' + params.items[i].total_height/2 + 'px;' +
							'width: ' + params.items[i].width/2 + 'px;' +
							'height: ' + params.items[i].height/2 + 'px;' +
							'}\n'
					}
					result += '}';
					return result;
				}
			},
			large3: {
				src: 'images/sprite/sprite@3x/*.png',
				destImg: 'images/spritesheet@3x.png',
				destCSS: 'less/spritestyles@3x.less',
				padding: 6,
				cssTemplate: function (params) {
					var result = '.sprite {display: inline-block; background-image: url(../img/spritesheet@3x.png); background-repeat: no-repeat;}';
					result += '@media only screen and (-webkit-min-device-pixel-ratio: 3), only screen and (-min--moz-device-pixel-ratio: 3), only screen and (-o-min-device-pixel-ratio: 5/2), only screen and (min-device-pixel-ratio: 3), only screen and (min-resolution: 288dpi), only screen and (min-resolution: 3dppx) {\n';
					for (var i = 0, ii = params.items.length; i < ii; i += 1) {
						result += '.sprite_icon-' + params.items[i].name + '{' +
							'background-position: ' + params.items[i].offset_x/3 + 'px ' + params.items[i].offset_y/3 + 'px;' +
							'background-size: ' + params.items[i].total_width/3 + 'px ' + params.items[i].total_height/3 + 'px;' +
							'width: ' + params.items[i].width/3 + 'px;' +
							'height: ' + params.items[i].height/3 + 'px;' +
							'}\n'
					}
					result += '}';
					return result;
				}
			}
		}
	});
	
	grunt.registerTask('default', [
//		'imagemin',
		'clean',
		'copy',
//		'cssmin',
//		'htmlmin',
//		'uglify',
		'replace'
	]);
	
	grunt.registerTask('debug', [
		'less',
		'autoprefixer',
		'cmq',
		'csscomb'
	]);
	grunt.registerTask('bootstrapLess', [
		'less:bootstrapLess',
		'autoprefixer:bootstr'
	]);
};