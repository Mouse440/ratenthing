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
         var splits = tagNames.substring(1,tagNames.length-1).split(',');
         
         var template = '';
         for(var message in splits) {
             var cat = splits[message].substring(1,splits[message].length-1);
             template += ['<span><a>',cat,'</a></span>','&nbsp;'].join('');
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
   return {
      restrict: 'A', //attribute only
      link: function(scope, elem, attr, ctrl) {
         elem.bind('click', function(e) {
            //do something here.
            console.log($http,attr,elem);
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




