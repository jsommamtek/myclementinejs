(function() {
'use strict';

	angular
		.module('Clementine')
		.controller('ContactsController', ContactsController);

	ContactsController.$inject = ['dependency1'];
	function ContactsController(dependency1) {
		var vm = this;
		

		activate();

		////////////////

		function activate() { }
	}
})();