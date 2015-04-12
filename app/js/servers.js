caiGe.service('foodService',function($q,$http){
    this.foods = [];
    this.foodType = '';
//    init();
//    function init(){
//        this.foods = $http.get("http://localhost:8080/app/asset/food.json")
//            .success(function(response) {
//                return response.foods;
//            })
//            .error(function(data, status, headers, config){
//                return 'connect to server fall';
//            });
//    }
    this.getFoods = function(){
        var that = this;
        var deferred = $q.defer();
        $http.get("http://localhost:8080/app/asset/food.json")
            .success(function(response) {
                deferred.resolve(response.foods);
                that.foods = response.foods

            })
            .error(function(data, status, headers, config){
                deferred.reject(data);
                that.foods = 'connect to server fall';
            });
            return deferred.promise
    };

    this.getTypeFood = function(type){
        if(type == '' || type == undefined || type == null){
            return this.foods;
        }
        var sucai  = [];
        for(var j = 0; j<this.foods.length;j++){
            for(var i = 0; i<this.foods[j].type.length;i++){
                if(this.foods[j].type[i] == type){
                    sucai.push(this.foods[j]);
                }
            }
        }
        return sucai;
    };

    this.getDispPageArray = function(page,type){
        var foods = [],disp = [];
        if(type){
            foods = this.getTypeFood(type);
        }else{
            foods = this.foods;
        }

        var pageNum = Math.ceil(foods.length/6);
        for(var i = 1; i<=pageNum; i++){
            disp.push(i);
        }
        return disp;
    };

    this.getDispFoodArray = function(page,type){
        var foods = [],dispFoods = [];
        if(type){
            if(type == 'original'){
                foods = this.getTypeFood(this.foodType);
            }else{
                foods = this.getTypeFood(type);
                this.foodType = type;
            }

        }else{
            foods = this.foods;
            this.foodType = '';
        }

        for(var i = 0,count = 0; i<foods.length;i++){
            count++;
            if((page-1)*6<count && count <= page*6){
                dispFoods.push(foods[i]);
            }
        }
        return dispFoods;
    }

});


caiGe.service('userChoseFood',function(foodService){
    this.choseFoods = [];
    this.addToChose = function(food){
        var hadChosed = false;
        for(var i = 0; i<this.choseFoods.length;i++){
            if (food.id == this.choseFoods[i].id) {
                food.count++;
                hadChosed = true;
                break;
            }
        }
        if(!hadChosed){
            food.count = 1;
            this.choseFoods.push(food);
        }
        
    };

    this.removeFood = function(food){
        for(var i = 0; i<this.choseFoods.length;i++){
            if(food.id == this.choseFoods[i].id){
                this.choseFoods.splice(i,1);
                break;
            }
        }
    };
});