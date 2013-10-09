/*
---
description: scroll-to the document
provides: [Delegator.scroll-to]
requires: [Behavior/Delegator, Core/Element, Behavior.smooth-scroll]
script: Delegator.scroll-to.js
name: Delegator.scroll-to
...
*/

(function(){

	Delegator.register('click', 'scroll-to', {

		require: ['target'],

		defaults: {
			'smooth-scroll': '!body [data-behavior~="smooth-scroll"]'
		},

		handler: function(event, link, api) {
			link.getElement(api.getAs(String, 'smooth-scroll')).getBehaviorResult('smooth-scroll').toElement(
				link.getElement(api.getAs(String, 'target'))
			);
		}

	});

})();
