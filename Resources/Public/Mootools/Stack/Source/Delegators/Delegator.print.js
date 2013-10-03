/*
---
description: print the document
provides: [Delegator.print]
requires: [Behavior/Delegator, Core/Element]
script: Delegator.print.js
name: Delegator.print
...
*/

(function(){

	Delegator.register('click', 'print', {
		handler: function(event, link, api) {
			event.stop();
			window.print();
		}
	});

})();
