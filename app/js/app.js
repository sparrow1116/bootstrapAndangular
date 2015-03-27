var caiGe = angular.module('caigeapp',['ui-router']);

caiGe.config(function($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise('/index');
    $stateProvider
        .state('index',{
            url:'/index',
            views:{
                '':{
                  templateUrl:'tpls/mainPage.html'
                },
                'topbar@mainPage':{
                    templateUrl:'tpls/topbar.html'
                },
                'main@mainPage':{
                    templateUrl:'tpls/main.html'
                }
            }
        });
});