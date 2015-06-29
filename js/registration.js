(function() {

  var app = angular.module("validation", ['ngMessages']);

	var RegistrationController = function($scope, $http) {
		$scope.message = "";
		$scope.register = function() {
			var request = $http({
				method: "POST",
				//URL
				url: "../CInSQLPlatform/php/Registration.php",
				data: {
					user_name: $scope.name, 
					user_last_name: $scope.lastname,
					user_email: $scope.email,
					user_password_new: $scope.password,
					user_password_repeat: $scope.confirmPassword
				},
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
			});
			
			request.success(function (data) {
				console.log(data);
			});	
		};
	
	};
  
  	

  var compareTo = function() {
    return {
      require: "ngModel",
      scope: {
        otherModelValue: "=compareTo"
      },
      link: function(scope, element, attributes, ngModel) {

        ngModel.$validators.compareTo = function(modelValue) {
          return modelValue == scope.otherModelValue;
        };

        scope.$watch("otherModelValue", function() {
          ngModel.$validate();
        });
      }
    };
  };

  app.directive("compareTo", compareTo);
  app.controller("RegistrationController", RegistrationController);
  
  
  

}());