angular.module('app', [])
  .controller('AppCtrl', function($scope) {
    $scope.test = "Andrei";
  })
  .directive('bubbles', function() {
    return {
      templateUrl: 'bubbles.html',
      restrict: 'E',
      scope: {
        name: '='
      }
    };
  });