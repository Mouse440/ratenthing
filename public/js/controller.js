var controllers = angular.module('appControllers',[]);

controllers.
    controller('FeedController', ['$scope','$http', 'postDataService', function($scope,$http,postDataService){
        var path = '/posts/allpost';
        /*{       
                "id": "asdasda1u9njkgsdasdas",
                "author": "Lorem Author",
                "title": "Lorem Title",
                "imgLink": "images/img_29.jpg",
                "likes": 20,
                "tagNames": ["category1","category2"],
                "description": "Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
        }*/
        
        var filterData = function(raw){
            console.log(raw);
            var returnObj = [];
            if(raw.status) {            //check if data status was ok
                var d = raw.status;     
                d.forEach(function(val,i){      //loop through the objects
                    returnObj[i] = 
                        { 
                            id: val._id,
                            author: val.author.firstName,
                            title: val.title,
                            imgLink: val.imgUrl,
                            description: val.content, 
                            tagss: []
                        };
                        
                    val.tag.forEach(function(tagObj,i){ //parsing the tags
                        returnObj[i].tagss.push({
                            name: tagObj.name,
                            id: tagObj._id
                        });
                    });
                });
            } 
            
            return returnObj;
        }
        
        $http.get(path).success(function(data){ //get data
            $scope.loggedIn = $("#my-post").attr('href') ? true : false; //check if user is logged in
            
            var returnObj = [];
                // parsing data
                var d = data.status;    
                for(var i in d) {
                    var val = d[i];
                    returnObj[i] = { 
                            id: val._id,
                            author: val.author.firstName,
                            title: val.title,
                            imgLink: val.imgUrl,
                            description: val.content, 
                            likes: val.likes,
                            tagss: Array()
                        };
                    
                    for(var j in val.tag) {
                        var tagObj = val.tag[j];
                        if(tagObj) {                    //there is a tag
                            returnObj[i].tagss.push({
                                name: tagObj.name,
                                id: tagObj._id
                            });
                        }
                    }
                }
                $scope.content = returnObj;
                postDataService.setData(data); //cache data to the global service
        });
        
        
    }]).
    controller('SinglePostController', ['$scope','$http', '$routeParams', '$anchorScroll', '$location', 'postDataService', function($scope,$http,$routeParams,$anchorScroll,$location, postDataService){
        var id = $routeParams.postId;
        var data = postDataService.getData();
        var path = 'fake-data/data.json';

        $scope.content = data[id];                  //get data from cache

        if($scope.content == undefined) {           //cache missed
            $http.get(path).success(function(data){ //get data from source
                $scope.content = data[id];          //set data to the scope
            });
        }
        
        // $location.hash('app-view');
        // $anchorScroll();
    }]).
    controller('LoginController',['$scope','$http','$window', function($scope,$http,$window) {
        
        $scope.email = "";
        $scope.password = "";
        $scope.validateLogin = function(data) {
            url='/login';
            console.log("validating data","data is:",data);
            $http({
                method: 'POST',
                url: url,
                headers: {'Content-Type': 'application/json; charset=utf-8'},
               
                data: {email: data.email, password: data.password, rememberMe: data.rememberMe}
            }).success(function (res) {
                if(res.error) {
                    $scope.errorMessage = "Your credential was incorrect. Please try again.";
                    $scope.error = true;
                } else {
                   $window.location.href = res.success;
                }
                
            });
        }
    }]).
    controller('LogoutController', ['$scope','$http','$window', function($scope,$http,$window) {
        $scope.logout = function() {
            url='/logout';
            $http({
                method: 'GET',
                url: url,
            }).success(function (res) {
                $window.location.href = '/';
            }).error(function(res){
                $window.location.href = '/';
            });
        }
    }]).
    controller('RegisterController', ['$scope','$http','$window', function($scope,$http,$window) {
        $scope.error = false;
        $scope.register = function(user) {
            console.log(user);
            var url = '/users/create';
             if(user.password != user.passwordConfirm) { //precheck
                $scope.error = true;
                $scope.errorMessage = "Password do not match.";
            } else {     
                $http({
                method: 'POST',
                url: url,
                headers: {'Content-Type': 'application/json; charset=utf-8'},
               
                data: user
                }).success(function (res) {
                    if(res.error) {
                        console.log("response:",res);
                        $scope.errorMessage = "Failed to create user " + res.error;
                        $scope.error = true;
                    } else {
                       $window.location.href = res.success;
                    }
                    
                });
            }
        }
    }]).
    controller('CreatePostController', ['$scope','$http','$window', function($scope,$http,$window) {
        $scope.error = false;
        $scope.createPost = function(post) {
            post.tag = $("#post-tags").materialtags("items");
            var url = '/posts/create'; 
            console.log(post.tags);
            $http({
                method: 'POST',
                url: url,
                headers: {'Content-Type': 'application/json; charset=utf-8'},
                data: post
                }).success(function (res) {
                    if(res.error) {
                        console.log("response:",res);
                        $scope.errorMessage = "Failed to create user " + res.error;
                        $scope.error = true;
                    } else {
                      $window.location.href = res.success;
                    }
                    
                });
        }
    }]);