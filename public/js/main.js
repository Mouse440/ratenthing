/**
 * Main functional script for ratenthing
 */

var app = angular.module('app', [
    'ngRoute',
    'appControllers',
    'appServices',
    'akoenig.deckgrid'
    ]);

app.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
        when('/', {								//feed page
            templateUrl: 'views/item-template.html',
            controller: 'FeedController'
        }).
        when('/post/:postId', {
        	templateUrl: 'views/single-post.html',
        	controller: 'SinglePostController'
        }).
        otherwise({
            redirectTo: '/'						//worst case go back to feed
        });
}]);


app.directive('rntFeedItem',function() { //directive for attaching feed item
	// var itemViews = [];
	return function(scope, element, attrs) {
		    if ( $('.animate-box').length == $("#fh5co-board").attr("data-items-length") ){	//iteration is completed
		    	$('.animate-box').waypoint( function( direction ) {	//attach animate action
					if( direction === 'down' && !$(this).hasClass('animated') ) { //animate when scrolling down
						$(this.element).addClass('bounceIn animated');
					}
				} , { offset: '75%' } );
		    }
		};
}); 

app.directive('img', function () {
    return {
        restrict: 'E',        
        link: function (scope, element, attrs) {    
            // show an image-missing image
            element.error(function () {
                element.css('display', 'none');
            });
        }
    }
});

app.directive('tsTags', function($compile) {
     var getTemplate = function(tagNames) {
        var template = '';
        
        if(tagNames) {              //check corner case
            var parsedTags = JSON.parse(tagNames);
        
            for(var i in parsedTags) {
                template += ['<span><a>',parsedTags.name,'</a></span>','&nbsp;'].join('');
            }
        }
        return template;
     };
      return {
         restrict: 'E',
  
         link: function(scope, element, attrs) {
            element.html(getTemplate(attrs.tagnames)).show();
          }
      };
 });
 
app.directive('thumbUp', ['$http', function($http,$scope){ 
    var postIds = [];
   return {
      restrict: 'A', //attribute only
      link: function(scope, elem, attr, ctrl) {
         elem.bind('click', function(e) {
            //do something here.
            var postId = elem[0].attributes['thumb-up'].nodeValue;
            if(postIds.indexOf(postId) == -1) {
                postIds.push(postId);                   //stuff the post id
                $(elem).addClass('liked');              //visual affect for liked
                
                var currentLikeVal = parseInt($(elem).siblings('.like-value').text()); //get current like value
                currentLikeVal = (isNaN(currentLikeVal)) ? 0 : currentLikeVal;          //catch corner case
                $(elem).siblings('.like-value').text(currentLikeVal+1);                 //update val
            }
            console.log(postIds);
            // TODO: update the post to server
            
         });
      }
   };
}]);

app.filter('greaterThan', function () {
    return function (n, val) {
        if(parseInt(n) > parseInt(val))
        return n;
    };
});




