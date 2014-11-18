var app = angular.module("animateSandbox");

app.controller('animateCtrl', function($scope,$timeout){

	$scope.slideInLeft = false;
	$scope.slide = function(){
		$scope.slideInLeft = !$scope.slideInLeft;
	}










})