	// create the module and name it myApp
    // also include ngRoute for all our routing needs
    var myApp = angular.module('myApp', ['ngRoute']);

    // configure our routes
    myApp.config(function($routeProvider) {
        $routeProvider

 
            //Route for add question
            .when('/addQuestion', {
                templateUrl : 'pages/addQuestions.html',
                controller  : 'CRUDController'
            })

			.when('/addList', {
                templateUrl : 'pages/addList.html',
                controller  : 'CRUDController'
            })
			
            //Route for remove a question
            .when('/remove', {
                templateUrl : 'pages/removeQuestion.html',
                controller  : 'CRUDController'
            });
      
    });

	myApp.controller('CRUDController', function ($scope, $http) {
		
		$scope.addQuestion = function () {
			console.log("Taligado");
			console.log($scope.title);
			console.log($scope.wtf);
			console.log($scope.code);
			var request = $http({
				method: "POST",
				//URL
				url: "http://localhost:8080/CInSQL/CInSQLPlatform/php/addQuestion.php",
				data: {
					title: $scope.title,
					statement: $scope.wtf,
					code: $scope.code,
					listNum: $scope.list
				},
					headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			});
			
			//NEED CHANGE
			request.success(function (data) {
				console.log("CONSEGUI\n");
			});	
		}
		
		$scope.addList = function(){
			console.log($scope.numList);
			console.log($scope.listDesc);
			
			var request = $http({
				method: "POST",
				//URL
				url: "http://localhost:8080/CInSQL/CInSQLPlatform/php/addList.php",
				data: {
					numList: $scope.numList,
					listDesc: $scope.listDesc
				},
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			});

			request.success(function (data) {
				console.log("CONSEGUI\n");
			});	
		}
		
		
		
	});