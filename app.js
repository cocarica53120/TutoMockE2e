var myApp = angular.module('myApp', []);
 
myApp.controller('testCtrl', function ($scope, $http) {
 
    $scope.dynamicPageTitle = 'Dynamic Page Title';
 
    $http.get('data1.json').success(function (response) {
        $scope.data1 = response;
    });
 
    $http.get('data2.json').success(function (response) {
        $scope.listData = response;
    });
 
});
