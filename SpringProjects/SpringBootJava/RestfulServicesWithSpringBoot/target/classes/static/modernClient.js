var restApp = angular.module('coursesApp', []);

restApp.constant('baseURL','/modern/courses/');

restApp.controller('CoursesController', function (baseURL, $scope,$http) {
    fetchCourses();
    $scope.noCourseSelected = true;
    $scope.courseBeingUpdated = false;
    $scope.difficultyFilter = "ADVANCED";

    function storeCourses(response) {
        $scope.error = "";
        $scope.courses = response.data;
        $scope.numCourses = response.headers("NumCourses");
    }
    function handleFailure() {
        $scope.error = "Cannot load courses";
    }
    function fetchCourses() {
        $http.get(baseURL)
			 .then(storeCourses,handleFailure);
    }
    function fetchCoursesByDifficulty() {
        var difficulty = $scope.difficultyFilter;
        if(difficulty !== "ALL") {
            $http.get(baseURL, { params: { type: difficulty }})
                 .then(storeCourses,handleFailure);
        } else {
            fetchCourses()
        }
    }
    $scope.fetchCourses = fetchCourses;
    $scope.fetchCoursesByDifficulty = fetchCoursesByDifficulty;
    
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