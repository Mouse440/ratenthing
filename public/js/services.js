var appServices = angular.module('appServices',[]);

//adding a service to store global data
appServices.factory('postDataService', function(){
	var data = [];

	var setData = function(d) {
		data = d;
	}

	var getData = function() {
		return data;
	}

	return {
		setData: setData,
		getData: getData
	}
});