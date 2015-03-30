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
        });

});

//var caiGe = angular.module('caigeapp',[]);
//caiGe.controller('test',function($scope){
//    $scope.greeting={
//        'text':'what a'
//    };
//});