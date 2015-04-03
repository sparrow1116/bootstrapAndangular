var caiGe = angular.module('caigeapp',['ui.router']);

caiGe.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider

        // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
        // Here we are just setting up some convenience urls.
        .when('/c?id', '/contacts/:id')
        .when('/user/:id', '/contacts/:id')

        // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
        .otherwise('/index');

    $stateProvider
        .state('index',{
            url:'/index',
            views:{
                '':{
                  templateUrl:'tpls/head-body.html'
                },
                'topbar@index':{
                    templateUrl:'tpls/topbar.html'
                },
                'center@index':{
                    templateUrl:'tpls/main.html'
                }
            }
        })
        .state('booking',{
            url:'/booking',
            views:{
                '':{
                    templateUrl:'tpls/head-body.html'
                },
                'topbar@booking':{
                    templateUrl:'tpls/topbar.html'
                },
                'left@booking':{
                    templateUrl:'tpls/book-left-list.html'
                },
                'center@booking':{
                    templateUrl:'tpls/book-center-items.html'
                },
                'right@booking':{
                    templateUrl:'tpls/book-right-lists.html'
                }
            }
        })
//        .state('helper',{
//            url:'/helper',
//            views:{
//                '':{
//                    templateUrl:'tpls/head-body.html'
//                },
//                'topbar@helper':{
//                    templateUrl:'tpls/topbar.html'
//                },
//                'left@helper':{
//                    templateUrl:'tpls/help-left-list.html'
//                },
//                'center@helper':{
//                    templateUrl:'tpls/help-center-item.html'
//                }
//            }
//        })
        .state('cart',{
            url:'/cart',
            views:{
                '':{
                    templateUrl:'tpls/head-body.html'
                },
                'topbar@cart':{
                    templateUrl:'tpls/topbar.html'
                },
                'left@cart':{
                    templateUrl:'tpls/cart-left-list.html'
                },
                'center@cart':{
                    templateUrl:'tpls/cart-center-list.html'
                }
            }
        })
        .state('user',{
            url:'/user',
            views:{
                '':{
                    templateUrl:'tpls/head-body.html'
                },
                'topbar@user':{
                    templateUrl:'tpls/topbar.html'
                },
                'center@user':{
                    templateUrl:'tpls/user-center-picture.html'
                },
                'right@user':{
                    templateUrl:'tpls/user-right-register.html'
                }
            }
        })
        .state('user.login',{
            url:'/login',
//            views:{
//                '':{
//                    templateUrl:'tpls/head-body.html'
//                },
//                'topbar@login':{
//                    templateUrl:'tpls/topbar.html'
//                },
//                'center@login':{
//                    templateUrl:'tpls/user-center-picture.html'
//                },
                'right@login':{
                    templateUrl:'tpls/user-right-login.html'
                }
//            }
        });

});

caiGe.config(function($stateProvider,$urlRouterProvider){

    $urlRouterProvider

        // The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
        // Here we are just setting up some convenience urls.
        .when('/c?id', '/contacts/:id')
        .when('/user/:id', '/contacts/:id')

        // If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
        .otherwise('/index');

    $stateProvider
        .state('helper',{
            url:'/helper',
            abstract: true,
            views:{
                '':{
                    templateUrl:'tpls/head-body.html'
                },
                'topbar@helper':{
                    templateUrl:'tpls/topbar.html'
                },
                'left@helper':{
                    templateUrl:'tpls/help-left-list.html'
                },
                'center@helper':{
                    templateUrl:'tpls/help-center-item.html'
                }
            }
        })
//        .state('helper.process',{
//            url:'/process',
//                'center@helper':{
//                    templateUrl:'tpls/user-right-login.html'
//                }
//
//        })
    ;
});

//var caiGe = angular.module('caigeapp',[]);
//caiGe.controller('test',function($scope){
//    $scope.greeting={
//        'text':'what a'
//    };
//});