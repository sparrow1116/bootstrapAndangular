caiGe.controller('dispFood',function($scope,$http){
    $http.get("http://localhost:8080/app/asset/food.json")
        .success(function(response) {
            $scope.allFoods = response.foods;
            $scope.foods = $scope.allFoods;
            $scope.sucai = [];
            $scope.huncai = [];
            $scope.roucai = [];
            $scope.tangcai = [];
            $scope.xinpin = [];
            for(var food in $scope.allFoods){
                var types = food.type;
                for(var type in types){
                    if(type == "素菜"){
                        $scope.sucai.push(food);
                    }else if(type =="荤菜"){
                        $scope.huncai.push(food);
                    }else if(type =="汤菜"){
                        $scope.tangcai.push(food);
                    }else if(type =="肉菜"){
                        $scope.roucai.push(food);
                    }else if(type == "$scope.新品推荐"){
                        $scope.xinpin.push(food);
                    }
                }
            }

        });
});

caiGe.controller('foodType',function($scope){

    $scope.chooseFoodType = function(type){

    }
});