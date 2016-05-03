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




