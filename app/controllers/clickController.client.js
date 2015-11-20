'use static';

(function () {

   angular
      .module('clementineApp', ['ngResource'])
      .controller('clickController', ['$scope', '$resource', function ($scope, $resource) {
         
         var Click = $resource('/api/clicks');
         
         // CALLS THE API USING $resource WITH AN HTTP GET METHOD AND RETRIIVES THE UPDATED CLICK COUNT
         $scope.getClicks = function () {
            Click.get(function (results) {
               $scope.clicks = results.clicks;
            });
         };
                           
         // CALLS THE API USING $resource WITH AN HTTP POST METHOD AND RETRIIVES THE UPDATED CLICK COUNT
         $scope.addClick = function () {
           Click.save(function () {
              $scope.getClicks();
           });
         };
         
         // CALLS THE API USING $resource WITH AN HTTP DELETE METHOD AND RETRIIVES THE UPDATED CLICK COUNT
         $scope.resetClicks = function () {
           Click.remove(function () {
              $scope.getClicks();
           });
         };
         
         // Get the initial click count from the API on load of the app
         $scope.getClicks();
         
      }]);
})();