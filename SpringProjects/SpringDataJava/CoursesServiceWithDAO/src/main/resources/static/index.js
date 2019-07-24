var restApp = angular.module('coursesApp', []);

restApp.constant('baseURL','/courses/');

restApp.controller('CoursesController', function (baseURL, $scope,$http) {
    fetchCourses();
    $scope.noCourseSelected = true;
    $scope.courseBeingUpdated = false;
    
    function fetchCourses() {
        function storeCourses(response) {
            $scope.courses = response.data;
        }
        $http.get(baseURL).then(storeCourses);
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
        $http.put(baseURL + course.id, course).then(resetForm);
    };
    $scope.selectCourse = function(course) {
        $scope.noCourseSelected = false;
        $scope.selectedCourse = course;
    };
    $scope.deleteCourse = function(course) {
      function resetForm() {
          $scope.noCourseSelected = true;
          fetchCourses();
      }
      $http.delete(baseURL + course.id ).then(resetForm);
    };
});