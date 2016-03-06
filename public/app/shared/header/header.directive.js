module.exports = function(ngModule) {
  ngModule.directive('appHeader', [function() {
    return {
      restrict: 'E',
      template: require('./header.view.html') //'/app/shared/header/header.view.html'
    };
  }]);
};
