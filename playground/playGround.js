(function() {
'use strict';

   angular
      .module('Module')
      .controller('ControllerController', ControllerController);

   ControllerController.$inject = ['dependency1'];
   function ControllerController(dependency1) {
      var vm = this;
      

      activate();

      ////////////////

      function activate() { }
   }
})();

(function() {
   'use strict';

   angular
      .module('Module')
      .factory('Directive', Directive);

   Directive.$inject = ['dependency1'];
   function Directive(dependency1) {
      // Usage:
      //
      // Creates:
      //
      var directive = {
          bindToController: true,
          controller: ControllerController,
          controllerAs: 'vm',
          link: link,
          restrict: 'A',
          scope: {
          }
      };
      return directive;
      
      function link(scope, element, attrs) {
      }
   }
   /* @ngInject */
   function ControllerController () {
      
   }
})();

(function() {
'use strict';

   angular
      .module('Module')
      .factory('Service', Service);

   Service.$inject = ['dependency1'];
   function Service(dependency1) {
      var service = {
         exposedFn:exposedFn
      };
      
      return service;

      ////////////////
      function exposedFn() { }
   }
})();

(function() {
   'use strict';

   angular.module('module', [
      
   ]);
})();

(function() {
'use strict';

   angular
      .module('Module')
      .service('Service', Service);

   Service.$inject = ['dependency1'];
   function Service(dependency1) {
      this.exposedFn = exposedFn;
      
      ////////////////

      function exposedFn() { }
      }
})();

