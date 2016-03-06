module.exports = function(ngModule) {
  ngModule.directive('appHeader', [function() {
    return {
      restrict: 'E',
      templateUrl: '/app/shared/header/header.view.html'
    };
  }]);
};
