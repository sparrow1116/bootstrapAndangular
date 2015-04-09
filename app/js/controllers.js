caiGe.controller('dispFood',function($scope,$log,foodService){

    var promise = foodService.getFoods();
    promise.then(function(data){
        $scope.foods = data;
    },function(errorData){
        $scope.foods = [];
        $log.error('cannot get the food info');
    });

});

caiGe.controller('foodType',function($scope,$rootScope,foodService){

//    <a data-ng-click="chooseFoodType(1)" class="list-group-item">素菜</a>
//    <a data-ng-click="chooseFoodType(2)" class="list-group-item">荤菜</a>
//        <a data-ng-click="chooseFoodType(3)" class="list-group-item">肉菜</a>
//    <a data-ng-click="chooseFoodType(4)" class="list-group-item">汤羹</a>
//        <a data-ng-click="chooseFoodType(5)" class="list-group-item">套餐</a>
//    <a data-ng-click="chooseFoodType(6)" class="list-group-item">新品推荐</a>

    $scope.chooseFoodType = function(type){
        switch(type){
            case 0://all
                $rootScope.foods = foodService.foods;
                break;
            case 1://素菜
                $rootScope.foods = foodService.getTypeFood('素菜');
                break;
            case 2://荤菜
                $rootScope.foods = foodService.getTypeFood('荤菜');
                break;
            case 3://肉菜
                $rootScope.foods = foodService.getTypeFood('肉菜');
                break;
            case 4://汤菜
                $rootScope.foods = foodService.getTypeFood('汤类');
                break;
            case 5://套餐
                $rootScope.foods = foodService.getTypeFood('套餐');
                break;
            case 6://新品
                $rootScope.foods = foodService.getTypeFood('新品推荐');
                break;
        }

        $rootScope.dispFoods = [];
        for(var i = 0,count = 0;i<$rootScope.foods.length;i++){
            count++;
            if(count<=6){
                $rootScope.dispFoods.push($rootScope.foods[i]);
            }
        }

        var pageNum = Math.ceil($rootScope.foods.length/6);
        $rootScope.pages = [];
        for(var i = 1; i<=pageNum; i++){
            $rootScope.pages.push(i);
        }

    }
});


caiGe.controller('foodPages',function($scope,$rootScope){


    $scope.changePage = function(page){
        for(var i = 0,count = 0; i<$rootScope.foods.length;i++){
            count++;
            if((page-1)*6<count && count <= page*6){
                $rootScope.dispFoods.push($rootScope.foods[i]);
            }

        }

    };

});