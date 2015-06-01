	// create the module and name it scotchApp
    // also include ngRoute for all our routing needs
    var myApp = angular.module('myApp', ['ngRoute']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

 
            // route for the about page
            .when('/add', {
                templateUrl : 'pages/addQuestions.html',
                controller  : 'CRUDController'
            })

            // route for the contact page
            .when('/remove', {
                templateUrl : 'pages/removeQuestion.html',
                controller  : 'CRUDController'
            });
		 // use the HTML5 History API
      
    });

	myApp.controller('CRUDController', function ($scope, $http) {
		
		$scope.addQuestion = function () {
			console.log("Taligado");
			console.log($scope.title);
			console.log($scope.wtf);
			console.log($scope.code);
			var request = $http({
				method: "post",
				url: "http://localhost:8080/ZooSQL/addQuestion.php",
				data: {
					title: $scope.title,
					statement: $scope.wtf,
					code: $scope.code,
					listNum: $scope.list
				},
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			});
			
			request.success(function (data) {
				console.log("CONSEGUI\n");
			});
			
		}
	});