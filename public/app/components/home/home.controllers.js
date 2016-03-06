module.exports = function(ngModule) {
  ngModule.controller('homeCtrl', [function() {
    this.greetings = 'Hello World';
  }]);
};
