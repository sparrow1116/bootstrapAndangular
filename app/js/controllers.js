//caiGe.controller('dispFood',function($scope,$log,foodService){
//
//    var promise = foodService.getFoods();
//    promise.then(function(data){
//        $scope.foods = data;
//        $scope.dispFoods = foodService.getDispFoodArray(1);
//    },function(errorData){
//        $scope.foods = [];
//        $log.error('cannot get the food info');
//    });
//
//
//
//});
//
//caiGe.controller('foodType',function($scope,$rootScope,foodService){
//
//
//    $scope.chooseFoodType = function(type){
//        switch(type){
//            case 1://素菜
//                $scope.foods = foodService.getTypeFood('素菜');
//                $scope.dispFoods = foodService.getDispFoodArray(1,'素菜');
//                break;
//            case '2'://荤菜
//                $scope.foods = foodService.getTypeFood('荤菜');
//                $scope.dispFoods = foodService.getDispFoodArray(1,'荤菜');
//                break;
//            case '3'://肉菜
//                $scope.foods = foodService.getTypeFood('肉菜');
//                $scope.dispFoods = foodService.getDispFoodArray(1,'肉菜');
//                break;
//            case '4'://汤菜
//                $rootScope.foods = foodService.getTypeFood('汤类');
//                $scope.dispFoods = foodService.getDispFoodArray(1,'汤类');
//                break;
//            case '5'://套餐
//                $rootScope.foods = foodService.getTypeFood('套餐');
//                $scope.dispFoods = foodService.getDispFoodArray(1,'套餐');
//                break;
//            case '6'://新品
//                $rootScope.foods = foodService.getTypeFood('新品推荐');
//                $scope.dispFoods = foodService.getDispFoodArray(1,'新品推荐');
//                break;
//            default://all
//                $scope.foods = foodService.foods;
//                break;
//        }
//
//    }
//});
//
//
//caiGe.controller('foodPages',function($scope,$rootScope){
//
//
//    $scope.changePage = function(page){
//        for(var i = 0,count = 0; i<$rootScope.foods.length;i++){
//            count++;
//            if((page-1)*6<count && count <= page*6){
//                $rootScope.dispFoods.push($rootScope.foods[i]);
//            }
//
//        }
//
//    };
//
//});


function bookCtrl($scope,foodService){
    var promise = foodService.getFoods();
    promise.then(function(data){
        $scope.foods = data;
        $scope.dispFoods = foodService.getDispFoodArray(1);
        $scope.pages = foodService.getDispPageArray(1);
    },function(errorData){
        $scope.foods = [];
        $log.error('cannot get the food info');
    });

    $scope.chooseFoodType = function(type){
        switch(type){
            case 1://素菜
                $scope.foods = foodService.getTypeFood('素菜');
                $scope.dispFoods = foodService.getDispFoodArray(1,'素菜');
                $scope.pages = foodService.getDispPageArray(1,'素菜');
                break;
            case 2://荤菜
                $scope.foods = foodService.getTypeFood('荤菜');
                $scope.dispFoods = foodService.getDispFoodArray(1,'荤菜');
                $scope.pages = foodService.getDispPageArray(1,'荤菜');
                break;
            case 3://肉菜
                $scope.foods = foodService.getTypeFood('肉菜');
                $scope.dispFoods = foodService.getDispFoodArray(1,'肉菜');
                $scope.pages = foodService.getDispPageArray(1,'肉菜');

                break;
            case 4://汤菜
                $scope.foods = foodService.getTypeFood('汤类');
                $scope.dispFoods = foodService.getDispFoodArray(1,'汤类');
                $scope.pages = foodService.getDispPageArray(1,'汤类');
                break;
            case 5://套餐
                $scope.foods = foodService.getTypeFood('套餐');
                $scope.dispFoods = foodService.getDispFoodArray(1,'套餐');
                $scope.pages = foodService.getDispPageArray(1,'套餐');
                break;
            case 6://新品
                $scope.foods = foodService.getTypeFood('新品推荐');
                $scope.dispFoods = foodService.getDispFoodArray(1,'新品推荐');
                $scope.pages = foodService.getDispPageArray(1,'新品推荐');
                break;
            default://all
                $scope.foods = foodService.foods;
                $scope.dispFoods = foodService.getDispFoodArray(1);
                $scope.pages = foodService.getDispPageArray(1);
                break;
        }
    };

    $scope.changePage = function(page){
        $scope.dispFoods = foodService.getDispFoodArray(page,'original');
    }

}