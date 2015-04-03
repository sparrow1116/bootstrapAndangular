/**
 * Created by zhangyj on 15-4-1.
 */
var caiGe = angular.module('caigeapp',['ui.router']);



caiGe.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('index',{
            url:'/index',
            templateUrl:'tpls/main/main-page.html'
        })
    ;
});

caiGe.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('user',{
            url:'/user',
            templateUrl:'tpls/user-page/user-center-picture.html'
        })
        .state('user.login',{
            url:'/login',
            templateUrl:'tpls/user-page/user-right-login.html'
        })
        .state('user.register',{
            url:'/login',
            templateUrl:'tpls/user-page/user-right-register.html'
        })
    ;
});

caiGe.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('helper',{
            url:'/helper',
            templateUrl:'tpls/help-page/help-left-list.html'
        })
        .state('helper.process',{
            url:'/process',
            templateUrl:'tpls/help-page/help-center-process.html'
        })
    ;
});


caiGe.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('cart',{
            url:'/cart',
            templateUrl:'tpls/cart-page/cart-left-list.html'
        })
        .state('cart.myList',{
            url:'/mylist',
            templateUrl:'tpls/cart-page/cart-center-list.html'
        })
    ;
});

caiGe.config(function($stateProvider,$urlRouterProvider){
    $stateProvider
        .state('book',{
            url:'/book',
            templateUrl:'tpls/book-page/book-left-list.html'
        })
        .state('book.allfood',{
            url:'/allfood',
            views:{
                'center@book':{
                    templateUrl:'tpls/book-page/book-center-items.html'
                },

                'right@book':{
                    templateUrl:'tpls/book-page/book-right-lists.html'
                }
            }/*,
            controller:['$scope',
                function($scope){
                    $scope.foods = [1,2.3,4,5,6];
                }]*/


        });
});
