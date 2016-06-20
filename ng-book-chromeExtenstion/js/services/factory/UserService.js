app.factory('UserService',function(){

	var defaultSetting = {
		location:'CA/San_Francisco'
	};

	var service = {
		user:{},

		save:function(){
			localStorage.currentLocation = angular.toJson(service.user);
		},

		restore:function(){
			service.user = angular.fromJson(localStorage.currentLocation) || defaultSetting;

			return service.user;
		},

	}

	service.restore();

	//console.log(service.user);

	return service;
})