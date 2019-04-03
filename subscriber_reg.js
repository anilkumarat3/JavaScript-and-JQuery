/**
 * 
 */ 
         var mainApp = angular.module("mainApp", []);  
         mainApp.controller('studentController', function($scope) {  
            $scope.reset = function(){  
               $scope.foreName = "";  
               $scope.surName = "";  
               $scope.email = "";  
               $scope.organization = "";
               $scope.addressLine = "";
               $scope.city = "";
               $scope.postalCode = "";
               $scope.homeTelephone = "";  
               $scope.mobile = "";
               $scope.dob = "";
               $scope.gender = "";
               $scope.membershipNo = "";  
            }  
             $scope.reset();  
         });  
      