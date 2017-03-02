'use strict';

/**
 * @ngdoc function
 * @name testProjApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testProjApp
 */
//var app = angular.module('testProjApp',[])
angular.module('testProjApp')
  .controller('MainCtrl', function ($scope, $rootScope, serviceData, $uibModal, $log) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.addition = {addAN: "25", addBN: "10", addCP: "10", addDP: "25"}
    $scope.progress = [{id:1, value: "#progress1"},{id:2, value: "#progress2"},{id:3, value: "#progress3"}]
    $scope.selectedProg = $scope.progress[0]

    $scope.status1 = 0;
    $scope.status2 = 0;
    $scope.status3 = 0;

    $scope.AdditionP = function(perc, selectedProg) {
		var x = "status"+$scope.selectedProg.id
    	perc = Number($scope[x]) + Number(perc)
    	$scope[x] = perc;
    	if($scope[x] < 0) {
    		$scope[x] = 0;
    	}
    	angular.element('.fillColor'+$scope.selectedProg.id).css('width',$scope[x]+'%')
    	if($scope[x] > 100) {
			angular.element('.fillColor'+$scope.selectedProg.id).css('background-color','red')
    	}
    }
    $scope.AdditionN = function(perc) {
    	var y = "status"+$scope.selectedProg.id
    	$scope[y] = $scope[y] - perc;
    	if($scope[y] < 0) {
    		$scope[y] = 0;
    	}
    	angular.element('.fillColor'+$scope.selectedProg.id).css('width',$scope[y]+'%')
    	if($scope[y] < 100) {
			angular.element('.fillColor'+$scope.selectedProg.id).css('background-color','yellow')
    	}
    }

});