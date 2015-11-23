namespace module {
   'use strict';

   export interface IService {
   }
   export class Service implements IService {
      static $inject: Array<string> = ['dependency1'];
      constructor(private dependency1: dependency1Type) {}

   }

   angular
      .module('Module')
      .service('Service', Service);
}

namespace module {
   'use strict';

   export class ControllerController {
      static $inject: Array<string> = ['dependency1'];
      constructor(private dependency1: dependency1Type) {}

   }

   angular
      .module('Module')
      .controller('ControllerController', ControllerController);
}

namespace module {
   'use strict';

   angular.module('module', [
      
   ]);
}