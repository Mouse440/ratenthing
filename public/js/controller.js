var controllers = angular.module('appControllers',[]);

controllers.
    controller('FeedController', ['$scope','$http', 'postDataService', function($scope,$http,postDataService){
        var path = 'fake-data/data.json';
        $http.get(path).success(function(data){ //get data
            $scope.content = data;  //get the data and return it to the scope
            postDataService.setData(data); //cache data to the global service 
            // $scope.$emit('dataLoaded',{ routeName: $routeParams.routeName}); //pass route name up the chain
        });
     //    var path = ['data/',$routeParams.routeName,'.json'].join(''); //construct the route path
     //    $http.get(path).success(function(data){
        //  $scope.content = data;
        //  $scope.$emit('dataLoaded',{ routeName: $routeParams.routeName}); //pass route name up the chain
        // });
    }]).
    controller('SinglePostController', ['$scope','$http', '$routeParams', 'postDataService', function($scope,$http,$routeParams, postDataService){
        var id = $routeParams.postId;
        var data = postDataService.getData();
        var path = 'fake-data/data.json';

        $scope.content = data[id];                  //get data from cache

        if($scope.content == undefined) {           //cache missed
            $http.get(path).success(function(data){ //get data from source
                $scope.content = data[id];          //set data to the scope
                // console.log($scope.content);
            });
        }

        // var data = postDataService.getData();
        // // console.log();
        // $scope.singlePost = data[id];
        // console.log(data);
        // $scope.$on('dataLoaded', function(event, args){     
        //     $scope.routeName = args.routeName;                        //set routename to the scope 
        //   });
    }]).
    controller('LoginController',['$scope','$http', function($scope,$http) {
        $scope.validateLogin = function(data) {
            url='/login';
            console.log("validating data","data is:",data);
            $http({
                method: 'POST',
                url: url,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
               
                data: {email: data.email, password: data.password, rememberMe: data.rememberMe}
            }).success(function (res) {
                console.log("response:",res);
            });
        }
    }]);