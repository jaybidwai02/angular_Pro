app.provider('Weather',function(){
	var API_KEY = '';
	return {
		setAPI: function(key){
			API_KEY = key;
		},

		getUrl : function(type, ext) {
				return "http://api.wunderground.com/api/" +
				API_KEY + "/" + type + "/q/" +
				ext + '.json';
		},

		$get: function($q, $http){
			var self = this;
			return {
				getWeatherForecast: function(city){
					var waitTill = $q.defer();

					$http({
						method:'GET',
						url: self.getUrl("forecast", city),
						cache:true
					}).success(function(data){
						waitTill.resolve(data.forecast.simpleforecast);
					}).error(function(err){
						waitTill.reject(err);
					});

					return waitTill.promise;
				}
			}
		}
	}
})