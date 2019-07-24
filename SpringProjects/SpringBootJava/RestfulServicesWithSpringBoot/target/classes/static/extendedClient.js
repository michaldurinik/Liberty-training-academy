var restApp = angular.module('coursesApp', []);

restApp.constant('baseURL','/extended/courses/');

restApp.controller('CoursesController', function (baseURL, $scope,$http) {
    fetchCourses();
    $scope.noCourseSelected = true;
    $scope.courseBeingUpdated = false;
    
    function fetchCourses() {
        function storeCourses(response) {
			$scope.error = "";
            $scope.courses = response.data;
            $scope.numCourses = response.headers("NumCourses");
        }
		function handleFailure() {
			$scope.error = "Cannot load courses";
		}
        $http.get(baseURL)
			 .then(storeCourses,handleFailure);
    }
    $scope.fetchCourses = fetchCourses;
    
    $scope.beginUpdateOfCourse = function(course) {
        $scope.courseBeingUpdated = angular.copy(course);
    };
    $scope.updateCourse = function() {
        function resetForm() {
            $scope.courseBeingUpdated = false;
            fetchCourses();
        }
        var course = $scope.courseBeingUpdated;
        $http.put(baseURL + course.id, course)
             .then(resetForm);
    };
    $scope.selectCourse = function(course) {
		$scope.error = "";
        $scope.noCourseSelected = false;
        $scope.selectedCourse = course;
    };
    $scope.deleteCourse = function(course) {
        function refreshPage() {
            $scope.error = "";
            $scope.noCourseSelected = true;
            fetchCourses();
        }
		function handleFailure() {
			$scope.error = "Failed to delete " + course.id;
		}
      	$http.delete(baseURL + course.id )
             .then(refreshPage,handleFailure);
    };
});