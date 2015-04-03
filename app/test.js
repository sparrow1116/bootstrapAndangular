/**
 * Created by zhangyj on 15-3-31.
 */
var caiGe = angular.module('caigeapp',['ui.router']);
caiGe.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        //////////////
        // Contacts //
        //////////////
        .state('test001', {
            url:'/test1',
            templateUrl:'test001.html'
        })

});

caiGe.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('test002',{
            url:'/test',
            templateUrl:'test002.html'
        })
        .state('test002.members',{
            url:'/member',
            templateUrl:'test002-members.html'
        })
        .state('test002.process',{
            url:'/process',
            templateUrl:'test002-process.html'
        });
});