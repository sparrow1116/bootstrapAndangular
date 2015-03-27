module.exports = function (grunt) {

    var revision = null;
    var revisionTimestamp = grunt.template.date(grunt.template.today(), 'yyyymmdd');
    var srcRendererDependency = [
            '<%=pkg.src_path%>/ext/three.js',
            '<%=pkg.src_path%>/ext/tweenS.js',
            '<%=pkg.src_path%>/ext/CSS3DRenderer.js',
        ],
        srcHammerDependency = [
            '<%=pkg.src_path%>/ext/caph.hammer.js', //caph.js 이 후에 선언해야 된다.
        ],
        srcBase = [
            '<%=pkg.src_path%>/base.js',
            '<%=pkg.src_path%>/lang.js',
            '<%=pkg.src_path%>/misc/log.js',
            '<%=pkg.src_path%>/misc/base64.js',
            '<%=pkg.src_path%>/misc/map.js',
            '<%=pkg.src_path%>/misc/time.js'
        ],

        srcPlatformTV = [
            '<%=pkg.src_path%>/platform/dtv/key.js',
            '<%=pkg.src_path%>/platform/dtv/dtv.js',
            '<%=pkg.src_path%>/platform/dtv/shim4dtvapi.js'
        ],

        srcWUIEngine = [
            '<%=pkg.src_path%>/wui/engine/rendering/engineutils.js',
            '<%=pkg.src_path%>/wui/engine/rendering/basepage.js',
            '<%=pkg.src_path%>/wui/engine/rendering/commonobject.js',

            '<%=pkg.src_path%>/wui/engine/rendering/geometry.js',
            '<%=pkg.src_path%>/wui/engine/rendering/material.js',
            '<%=pkg.src_path%>/wui/engine/rendering/object.js',
            '<%=pkg.src_path%>/wui/engine/rendering/renderer.js',
            '<%=pkg.src_path%>/wui/engine/rendering/texture.js',
            '<%=pkg.src_path%>/wui/engine/rendering/dconsole.js',
            '<%=pkg.src_path%>/wui/engine/rendering/light.js'
        ],

        srcWUIEngineTween = [
            '<%=pkg.src_path%>/wui/engine/tween/animator.js',
            '<%=pkg.src_path%>/wui/engine/tween/layer.js',
            '<%=pkg.src_path%>/wui/engine/tween/timeline.js'
        ],

        srcDAL = [
            '<%=pkg.src_path%>/dal/basecache.js',
//            '<%=pkg.src_path%>/dal/filesystemcache.js',
            '<%=pkg.src_path%>/dal/daleventhandler.js',
            '<%=pkg.src_path%>/dal/constant.js',
            '<%=pkg.src_path%>/dal/basecache.js',
            '<%=pkg.src_path%>/dal/baseloader.js',
//            '<%=pkg.src_path%>/dal/filesystemcache.js',
            '<%=pkg.src_path%>/dal/localstoragecache.js',
            '<%=pkg.src_path%>/dal/preloader.js',
            '<%=pkg.src_path%>/dal/tagloader.js',
            '<%=pkg.src_path%>/dal/xhrloader.js'
        ],

        srcAppEvent = ['<%=pkg.src_path%>/app/event/engineventhandler.js', '<%=pkg.src_path%>/app/event/eventhandler.js'],

        srcWUIWidgetAndAni = [


            // caph.ui -----------------------


            '<%=pkg.src_path%>/wui/widget/widgetenum.js',
            '<%=pkg.src_path%>/wui/widget/widgeterror.js',
            '<%=pkg.src_path%>/wui/widget/eventenum.js',

            '<%=pkg.src_path%>/wui/widget/basicobject.js',
//            '<%=pkg.src_path%>/wui/ani/baseanifactory.js',
            '<%=pkg.src_path%>/wui/ani/baseanimation.js',

            '<%=pkg.src_path%>/wui/ani/fadeanimation.js',
            '<%=pkg.src_path%>/wui/ani/transferanimation.js',
            '<%=pkg.src_path%>/wui/ani/rotateanimation.js',
            '<%=pkg.src_path%>/wui/ani/scaleanimation.js',
            '<%=pkg.src_path%>/wui/ani/syncanimation.js',
            '<%=pkg.src_path%>/wui/ani/bounceanimation.js',
            '<%=pkg.src_path%>/wui/ani/groupautoflipanimation.js',
            '<%=pkg.src_path%>/wui/ani/scalebounceanimation.js',

            '<%=pkg.src_path%>/wui/ani/aniloader.js',
            '<%=pkg.src_path%>/wui/ani/anifactory.js',
            '<%=pkg.src_path%>/wui/widget/commonutil.js',

            '<%=pkg.src_path%>/wui/widget/view.js',
            '<%=pkg.src_path%>/wui/widget/uicontext.js',
            '<%=pkg.src_path%>/wui/widget/box.js',
            '<%=pkg.src_path%>/wui/widget/domcontainer.js',
            '<%=pkg.src_path%>/wui/widget/label.js',
            '<%=pkg.src_path%>/wui/widget/indicator.js',
            '<%=pkg.src_path%>/wui/widget/linearlayout.js',
            '<%=pkg.src_path%>/wui/widget/image.js',
            '<%=pkg.src_path%>/wui/widget/panel.js',
            '<%=pkg.src_path%>/wui/widget/inputbox.js',
            '<%=pkg.src_path%>/wui/widget/spinner.js',
            '<%=pkg.src_path%>/wui/widget/progressbar.js',
            '<%=pkg.src_path%>/wui/widget/colortag.js',
            '<%=pkg.src_path%>/wui/widget/gridwidget.js',
            '<%=pkg.src_path%>/wui/widget/listwidget.js',
            '<%=pkg.src_path%>/wui/widget/book.js',
            '<%=pkg.src_path%>/wui/widget/navigator.js',
            '<%=pkg.src_path%>/wui/widget/strip.js',
            '<%=pkg.src_path%>/wui/widget/carousel.js',
            '<%=pkg.src_path%>/wui/widget/highlighthelper.js',
            '<%=pkg.src_path%>/wui/widget/gears.js',
            '<%=pkg.src_path%>/wui/widget/button.js',

            '<%=pkg.src_path%>/wui/widget/keycontrol.js',
            '<%=pkg.src_path%>/wui/widget/imagegallery.js',
            '<%=pkg.src_path%>/wui/widget/sidebar.js',
            '<%=pkg.src_path%>/wui/widget/scene.js',
            '<%=pkg.src_path%>/wui/widget/scenemanager.js',
            '<%=pkg.src_path%>/app/appcore.js'
        ],
        srcFull = srcBase.concat(srcPlatformTV).concat(srcWUIEngine).concat(srcWUIEngineTween).concat(srcAppEvent).concat(srcDAL).concat(srcWUIWidgetAndAni).concat(['<%=pkg.src_path%>/wui/engine/rendering/deprecate.js']),

    //for caph-level1-unifined.js
        srcUnified = srcRendererDependency.concat(srcFull);

    //for caph.mobile.js
    var srcCommonToRefactorMobile = [ ],
        srcPlatformMobile = [
            '<%=pkg.src_path%>/platform/mobile/key.js',
        ],

        srcWUIEngineMobile = [
            '<%=pkg.src_path%>/wui/engine/rendering/engineutils.js',
            '<%=pkg.src_path%>/wui/engine/rendering/basepage.js',
            '<%=pkg.src_path%>/wui/engine/rendering/commonobject.js',

            '<%=pkg.src_path%>/wui/engine/rendering/geometry.js',
            '<%=pkg.src_path%>/wui/engine/rendering/material.js',
            '<%=pkg.src_path%>/wui/engine/rendering/object.js',
            '<%=pkg.src_path%>/wui/engine/rendering/renderer.js',
            '<%=pkg.src_path%>/wui/engine/rendering/texture.js',
            '<%=pkg.src_path%>/wui/engine/rendering/dconsole.js',
            '<%=pkg.src_path%>/wui/engine/rendering/light.js'
        ],

        srcWUIEngineTweenMobile = [
            '<%=pkg.src_path%>/wui/engine/tween/animator.js',
            '<%=pkg.src_path%>/wui/engine/tween/layer.js',
            '<%=pkg.src_path%>/wui/engine/tween/timeline.js'
        ],

        srcDALMobile = [
            '<%=pkg.src_path%>/dal/basecache.js',
//            '<%=pkg.src_path%>/dal/filesystemcache.js',
            '<%=pkg.src_path%>/dal/daleventhandler.js',
            '<%=pkg.src_path%>/dal/constant.js',
            '<%=pkg.src_path%>/dal/basecache.js',
            '<%=pkg.src_path%>/dal/baseloader.js',
//            '<%=pkg.src_path%>/dal/filesystemcache.js',
            '<%=pkg.src_path%>/dal/localstoragecache.js',
            '<%=pkg.src_path%>/dal/preloader.js',
            '<%=pkg.src_path%>/dal/tagloader.js',
            '<%=pkg.src_path%>/dal/xhrloader.js'
        ],

        srcAppEventMobile = ['<%=pkg.src_path%>/app/event/engineventhandler.js', '<%=pkg.src_path%>/app/event/eventhandler.js'],

        srcWUIWidgetAndAniMobile = [

            // for DAL in testSuite

            // caph.ui -----------------------


            '<%=pkg.src_path%>/wui/widget/widgetenum.js',
            '<%=pkg.src_path%>/wui/widget/widgeterror.js',
            '<%=pkg.src_path%>/wui/widget/eventenum.js',

            '<%=pkg.src_path%>/wui/widget/basicobject.js',
            '<%=pkg.src_path%>/wui/ani/baseanimfactory.js',
            '<%=pkg.src_path%>/wui/ani/baseanimation.js',

            '<%=pkg.src_path%>/wui/ani/fadeanimation.js',
            '<%=pkg.src_path%>/wui/ani/transferanimation.js',
            '<%=pkg.src_path%>/wui/ani/rotateanimation.js',
            '<%=pkg.src_path%>/wui/ani/scaleanimation.js',
            '<%=pkg.src_path%>/wui/ani/syncanimation.js',
            '<%=pkg.src_path%>/wui/ani/bounceanimation.js',
            '<%=pkg.src_path%>/wui/ani/groupautoflipanimation.js',
            '<%=pkg.src_path%>/wui/ani/scalebounceanimation.js',

            '<%=pkg.src_path%>/wui/ani/aniloader.js',
            '<%=pkg.src_path%>/wui/ani/animfactory.js',
            '<%=pkg.src_path%>/wui/widget/commonutil.js',

            '<%=pkg.src_path%>/wui/widget/eventhandler.js',
            '<%=pkg.src_path%>/wui/widget/view.js',
            '<%=pkg.src_path%>/wui/widget/uicontext.js',
            '<%=pkg.src_path%>/wui/widget/box.js',
            '<%=pkg.src_path%>/wui/widget/domcontainer.js',
            '<%=pkg.src_path%>/wui/widget/label.js',
            '<%=pkg.src_path%>/wui/widget/indicator.js',
            '<%=pkg.src_path%>/wui/widget/linearlayout.js',
            '<%=pkg.src_path%>/wui/widget/image.js',
            '<%=pkg.src_path%>/wui/widget/panel.js',
            '<%=pkg.src_path%>/wui/widget/inputbox.js',
            '<%=pkg.src_path%>/wui/widget/spinner.js',
            '<%=pkg.src_path%>/wui/widget/progressbar.js',
            '<%=pkg.src_path%>/wui/widget/colortag.js',
            '<%=pkg.src_path%>/wui/widget/gridwidget.js',
            '<%=pkg.src_path%>/wui/widget/listwidget.js',
            '<%=pkg.src_path%>/wui/widget/book.js',
            '<%=pkg.src_path%>/wui/widget/navigator.js',
            '<%=pkg.src_path%>/wui/widget/strip.js',
            '<%=pkg.src_path%>/wui/widget/carousel.js',
            '<%=pkg.src_path%>/wui/widget/highlighthelper.js',
            '<%=pkg.src_path%>/wui/widget/gears.js',
            '<%=pkg.src_path%>/wui/widget/button.js',

            '<%=pkg.src_path%>/wui/widget/keycontrol.js',
            '<%=pkg.src_path%>/wui/widget/imagegallery.js',
            '<%=pkg.src_path%>/wui/widget/sidebar.js',
            '<%=pkg.src_path%>/wui/widget/scenemanager.js'
        ],
        srcMobile = srcBase.concat(srcCommonToRefactorMobile).concat(srcPlatformMobile).concat(srcWUIEngineMobile).concat(srcWUIEngineTweenMobile).concat(srcAppEventMobile).concat(srcDALMobile).concat(srcWUIWidgetAndAniMobile).concat(['<%=pkg.src_path%>/wui/engine/rendering/deprecate.js']),
    //for caph-level1-unifined.mobile.js
        srcUnifiedMobile = srcRendererDependency.concat(srcMobile).concat(srcHammerDependency);


    var timestamp = grunt.template.date(grunt.template.today(), 'yyyymmdd_HHMMss');

    // Project configuration.
    grunt
        .initConfig({
            pkg: grunt.file.readJSON('package.json'),
            clean: {
                full: ['<%=pkg.build_path%>/<%=pkg.version%>/*.js'],
                css: ['<%=pkg.build_path%>/<%=pkg.version%>/*.css'],
                res: ['<%=pkg.build_path%>/res'],
                ext: ['<%=pkg.build_path%>/<%=pkg.version%>/ext'],
                amd: ['<%=pkg.build_path%>/<%=pkg.version%>/amd'],// TODO: uncomment when all amd support is ready
                testsuite: ['<%=pkg.test_path%>/resolution/'],// TODO: uncomment when all testsuites are ready
                testsuitewithbuild: ['<%=pkg.test_path%>/resolution/build/'],// TODO: uncomment when all testsuites are ready
                packages: ['<%=pkg.package_path%>'],
                mobile: ['<%=pkg.build_path%>/<%=pkg.version%>/*.mobile.js']
            },

            jshint: {
                grunt: {
                    options: {
                        jshintrc: '<%=pkg.src_path%>/jshintrc'
                    },
                    src: ['Gruntfile.js']
                },
                source: { // vd code + wuf code
                    options: {
                        jshintrc: '<%=pkg.src_path%>/jshintrc'
                    },
                    src: /*[
                     '<%=pkg.src_path%>/common/*.js',
                     '<%=pkg.src_path%>/core/*.js',
                     '<%=pkg.src_path%>/ext/*.js',
                     '<%=pkg.src_path%>/service/*.js',
                     '<%=pkg.src_path%>/ui/*.js']*/
                        ['<%=pkg.src_path%>/common/*.js',
                            '<%=pkg.src_path%>/app/event/*.js',
                            '<%=pkg.src_path%>/wui/engine/rendering/*.js',
                            '<%=pkg.src_path%>/wui/engine/tween/*.js',
                            '<%=pkg.src_path%>/ext/*.js',
                            '<%=pkg.src_path%>/dal/*.js',
                            '<%=pkg.src_path%>/wui/widget/*.js',
                            '<%=pkg.src_path%>/wui/ani/*.js']
                },
                build: {
                    options: {
                        jshintrc: '<%=pkg.build_path%>/jshintrc'
                    },
                    src: [
                        '<%=pkg.build_path%>/<%=pkg.version%>/*.js',
                        '!<%=pkg.build_path%>/<%=pkg.version%>/*.min.js',
                        '!<%=pkg.build_path%>/<%=pkg.version%>/amd/**/*.js'
                    ]
                },
                wuf: {
                    options: {
                        jshintrc: '<%=pkg.src_path%>/jshintrc'
                    },
                    src: ['<%=pkg.src_path%>/ui/*.js', '<%=pkg.src_path%>/core/*.js', '<%=pkg.src_path%>/core/dal/*.js']
                },
                dal: {
                    options: {
                        jshintrc: '<%=pkg.src_path%>/jshintrc'
                    },
                    src: ['<%=pkg.src_path%>/dal/*.js']
                },
                jenkins: {
                    options: {
                        jshintrc: '<%=pkg.src_path%>/jshintrc',
                        reporter: 'checkstyle',
                        reporterOutput: '<%=pkg.logs_path%>/jshint_checkstyle.xml'
                    },
                    src: /*[
                     '<%=pkg.src_path%>/common/*.js',
                     '<%=pkg.src_path%>/core/*.js',
                     '<%=pkg.src_path%>/ext/*.js',
                     '<%=pkg.src_path%>/service/*.js',
                     '<%=pkg.src_path%>/ui/*.js']*/
                        ['<%=pkg.src_path%>/common/*.js',
                            '<%=pkg.src_path%>/app/event/*.js',
                            '<%=pkg.src_path%>/wui/engine/rendering/*.js',
                            '<%=pkg.src_path%>/wui/engine/tween/*.js',
                            '<%=pkg.src_path%>/ext/*.js',
                            '<%=pkg.src_path%>/dal/*.js',
                            '<%=pkg.src_path%>/wui/widget/*.js',
                            '<%=pkg.src_path%>/wui/ani/*.js']
                }
            },

            concat: {
                css: {
                    options: {
                        banner: '/*! <%= pkg.name %> v<%= pkg.version%> | <%= grunt.template.date(grunt.template.today(), "yyyy-mm-dd h:MM:ss") %> | Copyright 2013 by Samsung Electronics, Inc. */\n'
                    },
                    files: {
                        /*'<%=pkg.build_path%>/<%=pkg.version%>/base_540p.css' :
                         ['<%=pkg.caph_path%>/stylesheets/base/540p/*.css'],
                         '<%=pkg.build_path%>/<%=pkg.version%>/base_720p.css' :
                         ['<%=pkg.caph_path%>/stylesheets/base/720p/*.css'],
                         '<%=pkg.build_path%>/<%=pkg.version%>/base_1080p.css' :
                         ['<%=pkg.caph_path%>/stylesheets/base/1080p/*.css'],
                         '<%=pkg.build_path%>/<%=pkg.version%>/base.css' :
                         [
                         '<%=pkg.caph_path%>/stylesheets/media_540.header',
                         '<%=pkg.caph_path%>/stylesheets/base/540p/*.css',
                         '<%=pkg.caph_path%>/stylesheets/media_540.footer',

                         '<%=pkg.caph_path%>/stylesheets/media_720.header',
                         '<%=pkg.caph_path%>/stylesheets/base/720p/*.css',
                         '<%=pkg.caph_path%>/stylesheets/media_720.footer',

                         '<%=pkg.caph_path%>/stylesheets/media_1080.header',
                         '<%=pkg.caph_path%>/stylesheets/base/1080p/*.css',
                         '<%=pkg.caph_path%>/stylesheets/media_1080.footer'],*/
                        '<%=pkg.build_path%>/<%=pkg.version%>/caph_540p.css': ['<%=pkg.src_path%>/stylesheets/caph//540p*.css'],
                        '<%=pkg.build_path%>/<%=pkg.version%>/caph_720p.css': ['<%=pkg.src_path%>/stylesheets/caph/720p/*.css'],
                        '<%=pkg.build_path%>/<%=pkg.version%>/caph_1080p.css': ['<%=pkg.src_path%>/stylesheets/caph/1080p/*.css'],
                        '<%=pkg.build_path%>/<%=pkg.version%>/caph.css': [
                            '<%=pkg.caph_path%>/stylesheets/media_540.header',
                            '<%=pkg.src_path%>/stylesheets/caph/540p/*.css',
                            '<%=pkg.caph_path%>/stylesheets/media_540.footer',

                            '<%=pkg.caph_path%>/stylesheets/media_720.header',
                            '<%=pkg.src_path%>/stylesheets/caph/720p/*.css',
                            '<%=pkg.caph_path%>/stylesheets/media_720.footer',

                            '<%=pkg.caph_path%>/stylesheets/media_1080.header',
                            '<%=pkg.src_path%>/stylesheets/caph/1080p/*.css',
                            '<%=pkg.caph_path%>/stylesheets/media_1080.footer'
                        ]
                    }
                },
                full: {
                    files: {
                        '<%=pkg.build_path%>/<%=pkg.version%>/caph.js': srcFull,
                        '<%=pkg.build_path%>/<%=pkg.version%>/caph-level1-unified.js': srcUnified
                    }
                },
                mobile: {
                    files: {
                        '<%=pkg.build_path%>/<%=pkg.version%>/caph.mobile.js': srcMobile,
                        '<%=pkg.build_path%>/<%=pkg.version%>/caph-level1-unified.mobile.js': srcUnifiedMobile
                    }
                },
                amd: {
                    files: {
                        '<%=pkg.build_path%>/<%=pkg.version%>/amd/base.js': srcBase.concat(srcPlatformTV).concat(
                            ['<%=pkg.src_path%>/misc/amdsupport.js'])
                    }
                }
            },

            copy: {
                amd: {
                    files: [
                        {
                            expand: true,
                            cwd: '<%=pkg.src_path%>/app/',
                            src: ['**/*.js'],
                            dest: '<%=pkg.build_path%>/<%=pkg.version%>/amd/app/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.src_path%>/misc/',
                            src: ['**/*.js'],
                            dest: '<%=pkg.build_path%>/<%=pkg.version%>/amd/misc/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.src_path%>/dal/',
                            src: ['**/*.js'],
                            dest: '<%=pkg.build_path%>/<%=pkg.version%>/amd/dal/'

                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.src_path%>/ext/',
                            src: ['**/*.js'],
                            dest: '<%=pkg.build_path%>/<%=pkg.version%>/amd/ext/'

                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.src_path%>/wui/',
                            src: ['**/*.js'],
                            dest: '<%=pkg.build_path%>/<%=pkg.version%>/amd/wui/'
                        },
                    ]
                },
                ext: {
                    expand: true,
                    cwd: '<%=pkg.src_path%>/ext/',
                    src: ['**/*'],
                    dest: '<%=pkg.build_path%>/<%=pkg.version%>/ext'
                },
                res: {
                    files: [
                        {
                            // src: 'caph/res/**/*',
                            // dest: '<%=pkg.build_path%>/'
                            expand: true,
                            cwd: '<%=pkg.caph_res_path%>/',
                            src: ['**/*'],
                            dest: '<%=pkg.build_path%>/res/'
                        }
                    ]
                },

                // :TODO FIX THIS TEST SUITE LATER
                // vd test_suite
                testsuite: {
                    files: [
                        {
                            expand: true,
                            cwd: '<%=pkg.test_path%>/test_app/app/',
                            src: ['**/*'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_1080_' + timestamp + '/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.test_path%>/test_app/app/',
                            src: ['**/*'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_720_' + timestamp + '/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.test_path%>/test_app/app/',
                            src: ['**/*'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_540_' + timestamp + '/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.test_path%>/unit',
                            src: ['**'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_1080_' + timestamp + '/testrunner/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.test_path%>/unit',
                            src: ['**'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_720_' + timestamp + '/testrunner/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.test_path%>/unit',
                            src: ['**'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_540_' + timestamp + '/testrunner/'
                        }
                    ]
                },
                // wuf test_suite modified vd test_suite
                testsuitewithbuild: {
                    files: [
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/res',
                            src: ['**'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_1080_' + timestamp + '/build/res/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>/amd',
                            src: ['**'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_1080_' + timestamp + '/build/<%=pkg.version%>/amd/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>/ext',
                            src: ['**'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_1080_' + timestamp + '/build/<%=pkg.version%>/ext/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>',
                            src: ['*.css'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_1080_' + timestamp + '/build/<%=pkg.version%>/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>',
                            src: ['*.js'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_1080_' + timestamp + '/build/<%=pkg.version%>/'
                        },

                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/res',
                            src: ['**'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_720_' + timestamp + '/build/res/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>/amd',
                            src: ['**'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_720_' + timestamp + '/build/<%=pkg.version%>/amd/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>/ext',
                            src: ['**'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_720_' + timestamp + '/build/<%=pkg.version%>/ext/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>',
                            src: ['*.css'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_720_' + timestamp + '/build/<%=pkg.version%>/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>',
                            src: ['*.js'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_720_' + timestamp + '/build/<%=pkg.version%>/'
                        },

                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/res',
                            src: ['**'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_540_' + timestamp + '/build/res/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>/amd',
                            src: ['**'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_540_' + timestamp + '/build/<%=pkg.version%>/amd/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>/ext',
                            src: ['**'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_540_' + timestamp + '/build/<%=pkg.version%>/ext/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>',
                            src: ['*.css'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_540_' + timestamp + '/build/<%=pkg.version%>/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>',
                            src: ['*.js'],
                            dest: '<%=pkg.test_path%>/resolution/TestSuite_540_' + timestamp + '/build/<%=pkg.version%>/'
                        }
                    ]
                },
                // for jenkins
                jenkins: {
                    expand: true,
                    cwd: '<%=pkg.build_path%>/',
                    src: ['**/*'],
                    dest: '/var/www/html/FRAMEWORK/'
                }
            },

            replace: {
                version: {
                    src: '<%=pkg.build_path%>/<%=pkg.version%>/**/*.js',
                    overwrite: true,
                    replacements: [
                        {
                            from: /\/\*\*\s*FRAMEWORK_VERSION\s*(.*)\*\//g,
                            to: '<%=pkg.version%>'
                        }
                    ]
                },
                revision: {
                    src: '<%=pkg.build_path%>/<%=pkg.version%>/**/*.js',
                    overwrite: true,
                    replacements: [
                        {
                            from: /\/\*\*\s*FRAMEWORK_REVISION\s*(.*)\*\//g,
                            to: function (matchedworkd) {
                                return  revision;
                            }
                        }
                    ]
                },
                amd: {
                    src: '<%=pkg.build_path%>/<%=pkg.version%>/amd/**/*.js',
                    overwrite: true,
                    replacements: [
                        {
                            from: /\/\*\*\s*AMDBEGIN\s*(.*)\*\//g,
                            to: 'define(["caph/base",$1], function () {\r\n	var mod = '
                        },
                        {
                            from: /\/\*\*\s*AMDEND\s*(.*)\*\//g,
                            to: ' return mod;});'
                        },
                        {
                            from: /\$\{FRAMEWORK\_VERSION\}/g,
                            to: '<%=pkg.version%>'
                        }
                    ]
                },
                css: {
                    src: '<%=pkg.build_path%>/<%=pkg.version%>/*.css',
                    overwrite: true,
                    replacements: [
                        {
                            from: '../../../../../res', // caph root directory is added so we have to plus one depth
                            to: '../res'
                        }
                    ]
                },
                // vd testsute replace width , height, appversion
                testsuite540: {
                    src: '<%=pkg.test_path%>/resolution/TestSuite_540_' + timestamp + '/**/*.{xml,info,js,html}',
                    overwrite: true,
                    replacements: [
                        {
                            from: '${WIDTH}',
                            to: '960'
                        },
                        {
                            from: '${HEIGHT}',
                            to: '540'
                        },
                        {
                            from: '../../../build',
                            to: '$FRAMEWORK'
                        },
                        {
                            from: '${APPVER}',
                            to: '<%=grunt.config("replace.testsuite.version")%>'
                        }
                    ]
                },

                testsuite720: {
                    src: '<%=pkg.test_path%>/resolution/TestSuite_720_' + timestamp + '/**/*.{xml,info,js,html}',
                    overwrite: true,
                    replacements: [
                        {
                            from: '${WIDTH}',
                            to: '1280'
                        },
                        {
                            from: '${HEIGHT}',
                            to: '720'
                        },
                        {
                            from: '../../../build',
                            to: '$FRAMEWORK'
                        },
                        {
                            from: '${APPVER}',
                            to: '<%=grunt.config("replace.testsuite.version")%>'
                        }
                    ]
                },

                testsuite1080: {
                    src: '<%=pkg.test_path%>/resolution/TestSuite_1080_' + timestamp + '/**/*.{xml,info,js,html}',
                    overwrite: true,
                    replacements: [
                        {
                            from: '${WIDTH}',
                            to: '1920'
                        },
                        {
                            from: '${HEIGHT}',
                            to: '1080'
                        },
                        {
                            from: '../../../build',
                            to: '$FRAMEWORK'
                        },
                        {
                            from: '${APPVER}',
                            to: '<%=grunt.config("replace.testsuite.version")%>'
                        }
                    ]
                },
                // wuf testsuite replace
                testsuitewithbuild: {
                    src: '<%=pkg.test_path%>/resolution/TestSuite_*/**/*.{xml,info,js,html}',
                    overwrite: true,
                    replacements: [
                        {
                            from: '../../../build',
                            to: 'build'
                        },
                        {
                            from: '$FRAMEWORK',
                            to: 'build'
                        },
                        {
                            from: '/**grunt-TestRunner-Start',
                            to: ''
                        },
                        {
                            from: 'grunt-TestRunner-End**/',
                            to: ''
                        }
                    ]
                },
                // wuf testsuite_runner replace
                testsuitewithbuildtestrunner: {
                    src: '<%=pkg.test_path%>/resolution/TestSuite_*/testrunner/**/**/*.{xml,info,js,html,css}',
                    overwrite: true,
                    replacements: [
                        {
                            from: '../../build/',
                            to: '../build/'
                        },
                        {
                            from:'gruntForTestsuite=true',
                            to:'gruntForTestsuite=false'
                        },
                        {
                            from:'qunit-1.12.0.js',
                            to:'qunit-1.12.0S.js'
                        }
                    ]
                }
            },

            uglify: {
                options: {
                    banner: '/*! <%= pkg.name %> v<%= pkg.version%> | <%=grunt.template.date(grunt.template.today(), "yyyy-mm-dd HH:MM:ss")%> | Copyright 2013 by Samsung Electronics, Inc. */\n'
                },
                full: {
                    files: {
                        '<%=pkg.build_path%>/<%=pkg.version%>/caph.min.js': ['<%=pkg.build_path%>/<%=pkg.version%>/caph.js'],
                        '<%=pkg.build_path%>/<%=pkg.version%>/caph-level1-unified.min.js': ['<%=pkg.build_path%>/<%=pkg.version%>/caph-level1-unified.js']
                    }
                },
                mobile: {
                    files: {
                        '<%=pkg.build_path%>/<%=pkg.version%>/caph.mobile.min.js': ['<%=pkg.build_path%>/<%=pkg.version%>/caph.mobile.js'],
                        '<%=pkg.build_path%>/<%=pkg.version%>/caph-level1-unified.mobile.min.js': ['<%=pkg.build_path%>/<%=pkg.version%>/caph-level1-unified.mobile.js']
                    }
                },
                caphHammer: {
                    files: {
                        '<%=pkg.build_path%>/<%=pkg.version%>/ext/caph.hammer.min.js': ['<%=pkg.build_path%>/<%=pkg.version%>/ext/caph.hammer.js']
                    }
                },
                amd: {
                    files: [
                        {
                            expand: true, // Enable dynamic expansion.
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>/amd', // Src matches are relative to this path.
                            src: ['**/*.js'], // Actual pattern(s) to match.
                            dest: '<%=pkg.build_path%>/<%=pkg.version%>/amd', // Destination path prefix.
                            ext: '.js' // Dest filepaths will have this extension.
                            // ext: '.min.js' // Dest filepaths will have this extension.
                        }
                    ]
                }
            },

            qunit: {
                all: {
                    options: {
                        timeout: 3 * 60 * 1000, // 3 minutes
                        urls: ['http://localhost:8000/index.html']
                    }
                }
            },

            connect: {
                server: {
                    options: {
                        port: 8000,
                        base: '.'
                    }
                }
            },

            mincss: {
                compress: {
                    files: {
                        '<%=pkg.build_path%>/<%=pkg.version%>/base_540p.css': ['<%=pkg.build_path%>/<%=pkg.version%>/base_540p.css'],
                        '<%=pkg.build_path%>/<%=pkg.version%>/base_720p.css': ['<%=pkg.build_path%>/<%=pkg.version%>/base_720p.css'],
                        '<%=pkg.build_path%>/<%=pkg.version%>/base_1080p.css': ['<%=pkg.build_path%>/<%=pkg.version%>/base_1080p.css'],
                        '<%=pkg.build_path%>/<%=pkg.version%>/base.css': ['<%=pkg.build_path%>/<%=pkg.version%>/base.css']
                    }
                }
            },

            // make a zipfile
            compress: {
                debug: {
                    options: {
                        archive: '<%=pkg.packages_path%>/<%=pkg.version%>_debug_' + timestamp + '.zip',
                        mode: 'zip'
                    },
                    files: [
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/res',
                            src: ['**'],
                            dest: 'res/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>/amd',
                            src: ['**'],
                            dest: '<%=pkg.version%>/amd/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>/ext',
                            src: ['**'],
                            dest: '<%=pkg.version%>/ext/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>',
                            src: ['*.css'],
                            dest: '<%=pkg.version%>/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>',
                            src: ['*.js'],
                            dest: '<%=pkg.version%>/'
                        }
                    ]
                },
                release: {
                    options: {
                        archive: '<%=pkg.packages_path%>/<%=pkg.version%>_release_' + timestamp + '.zip',
                        mode: 'zip'
                    },
                    files: [
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/res',
                            src: ['**'],
                            dest: 'res/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>/amd',
                            src: ['**'],
                            dest: '<%=pkg.version%>/amd/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>/ext',
                            src: ['**'],
                            dest: '<%=pkg.version%>/ext/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>',
                            src: ['*.css'],
                            dest: '<%=pkg.version%>/'
                        },
                        {
                            expand: true,
                            cwd: '<%=pkg.build_path%>/<%=pkg.version%>/',
                            src: ['*.min.js'],
                            dest: '<%=pkg.version%>/'
                        }
                    ]
                },

                testsuite540: {
                    options: {
                        archive: '<%=pkg.packages_path%>/TestSuite_540_' + timestamp + '.zip',
                        mode: 'zip'
                    },
                    expand: true,
                    cwd: '<%=pkg.test_path%>/resolution/TestSuite_540_' + timestamp,
                    src: ['**/*'],
                    dest: '/'
                },
                testsuite720: {
                    options: {
                        archive: '<%=pkg.packages_path%>/TestSuite_720_' + timestamp + '.zip',
                        mode: 'zip'
                    },
                    expand: true,
                    cwd: '<%=pkg.test_path%>/resolution/TestSuite_720_' + timestamp,
                    src: ['**/*'],
                    dest: '/'
                },
                testsuite1080: {
                    options: {
                        archive: '<%=pkg.packages_path%>/TestSuite_1080_' + timestamp + '.zip',
                        mode: 'zip'
                    },
                    expand: true,
                    cwd: '<%=pkg.test_path%>/resolution/TestSuite_1080_' + timestamp,
                    src: ['**/*'],
                    dest: '/'
                },

                testsuite540withbuild: {
                    options: {
                        archive: '<%=pkg.packages_path%>/TestSuite_540_withbuild_' + timestamp + '.zip',
                        mode: 'zip'
                    },
                    expand: true,
                    cwd: '<%=pkg.test_path%>/resolution/TestSuite_540_' + timestamp,
                    src: ['**/*'],
                    dest: '/'
                },
                testsuite720withbuild: {
                    options: {
                        archive: '<%=pkg.packages_path%>/TestSuite_720_withbuild_' + timestamp + '.zip',
                        mode: 'zip'
                    },
                    expand: true,
                    cwd: '<%=pkg.test_path%>/resolution/TestSuite_720_' + timestamp,
                    src: ['**/*'],
                    dest: '/'
                },
                testsuite1080withbuild: {
                    options: {
                        archive: '<%=pkg.packages_path%>/TestSuite_1080_withbuild_' + timestamp + '.zip',
                        mode: 'zip'
                    },
                    expand: true,
                    cwd: '<%=pkg.test_path%>/resolution/TestSuite_1080_' + timestamp,
                    src: ['**/*'],
                    dest: '/'
                }
            },

            prompt: {
                testsuite: {
                    options: {
                        questions: [
                            {
                                config: 'replace.testsuite.version',
                                type: 'input',
                                message: 'Please input the application\'s version X.XXX',
                                validate: function (ver) {
                                    var num = parseFloat(ver);
                                    if (num > 0) {
                                        return true;
                                    } else {
                                        return 'The version should be X.XXX format.';
                                    }
                                }
                            }
                        ]
                    }
                }
            },
            shell: {
                options: {
                    callback: makeRevision
                },
                revision: {
                    command: 'git log --pretty=format:"%H" -n 1'
                }
            }
        });
    //grunt-shell callback
    function makeRevision(err, stdout, stderr, cb) {
        revision = revisionTimestamp + '-' + stdout.replace(/\'/g, '');
        console.log('******************build revision******************');
        console.log('revision : ' + revision);
        console.log('**************************************************');
        cb();
    }

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-text-replace');
    grunt.loadNpmTasks('grunt-contrib-mincss');
    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-prompt');
    grunt.loadNpmTasks('grunt-shell');

    // the default task can be run just by typing "grunt" on the command line
    grunt.registerTask('debug',
        ['jshint:grunt', 'jshint:source', 'jshint:wuf', 'full', 'amd', 'mobile', 'res', 'ext', 'css']);
    grunt.registerTask('minify',
        ['uglify', 'mincss']);
    grunt.registerTask('default',
        ['debug', 'revision', 'minify']); // release
    //    grunt.registerTask('default', ['wuf_build']);	// release
    grunt.registerTask('wuf_jshint',
        ['jshint:wuf']); // release
    grunt.registerTask('wuf_build',
        ['clean:full', 'concat:full', 'concat:mobile', 'copy_without_testsuite', 'css', 'amd', 'revision']); // for wuf

    grunt.registerTask('package',
        ['debug', 'compress:debug', 'minify', 'compress:release']);
    grunt.registerTask('full',
        ['clean:full', 'concat:full', 'jshint:build']);
    grunt.registerTask('amd',
        ['clean:amd', 'concat:amd', 'copy:amd', 'replace:amd']);
    grunt.registerTask('css',
        ['clean:css', 'concat:css', 'replace:css']);
    grunt.registerTask('res',
        ['clean:res', 'copy:res']);
    grunt.registerTask('ext',
        ['clean:ext', 'copy:ext']);
    grunt.registerTask('copy_without_testsuite',
        ['copy:amd', 'copy:ext', 'copy:res']);

    grunt.registerTask('testsuite',
        [
            'prompt:testsuite',
            'clean:testsuite',
            'copy:testsuite',
            'replace:testsuite540',
            'replace:testsuite720',
            'replace:testsuite1080',
            'compress:testsuite540',
            'compress:testsuite720',
            'compress:testsuite1080',
            'clean:testsuite'
        ]);
    grunt.registerTask('testsuitewithbuild',
        [
            'prompt:testsuite',
            'clean:testsuite',
            'copy:testsuite',
            'replace:testsuite540',
            'replace:testsuite720',
            'replace:testsuite1080',
            'replace:testsuitewithbuild',
            'replace:testsuitewithbuildtestrunner',
            'copy:testsuitewithbuild',
            'compress:testsuite540withbuild',
            'compress:testsuite720withbuild',
            'compress:testsuite1080withbuild',
            'clean:testsuite'
        ]);

    grunt.registerTask('jenkins',
        ['jshint:jenkins', 'default', 'copy:jenkins']);

    grunt.registerTask('mobile',
        [
            'clean:mobile',
            'concat:mobile'
        ]);
    grunt.registerTask('revision', ['shell', 'replace:version', 'replace:revision']);
};

