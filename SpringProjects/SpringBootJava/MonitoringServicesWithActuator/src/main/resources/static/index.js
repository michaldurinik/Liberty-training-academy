var actuatorApp = angular.module('actuatorApp', []);

actuatorApp.controller('ActuatorController', function ($scope, $http) {
    function storeMetrics(response) {
        var metricsTable = response.data;
        $scope.metrics = [];
        for(key in metricsTable) {
        		$scope.metrics.push({name: key, value: metricsTable[key]});
        }
    }
    function storeTracings(response) {
            var tracings = response.data;
    		$scope.tracings = [];
    		for(var x=0;x<tracings.length;x++) {
    			var trace = tracings[x];
    			var msg = 'Request to ' + trace.info.path ;
    			$scope.tracings.push(msg);
    		}
    }
    function storeHealth(response) {
    		$scope.health = response.data.status;
    		$scope.custom = response.data.myHealthCheck.foobar;
    }
    $http.get('/health').then(storeHealth);
    $http.get('/metrics').then(storeMetrics);
    $http.get('/trace').then(storeTracings);
});