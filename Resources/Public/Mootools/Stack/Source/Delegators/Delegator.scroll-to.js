/*
---
description: scroll-to the document
provides: [Delegator.scroll-to]
requires: [Behavior/Delegator, Core/Element, Behavior.scroll]
script: Delegator.scroll-to.js
name: Delegator.scroll-to
...
*/

(function(){

	Delegator.register('click', 'scroll-to', {

		require: ['target'],

		defaults: {
			'scroll': '!body [data-behavior~="scroll"], !body [data-behavior~="smooth-scroll"]'
		},

		handler: function(event, link, api) {
			event.stop();
			var scroll = link.getElement(api.getAs(String, 'scroll'));
			var scroller = scroll.getBehaviorResult('scroll') || scroll.getBehaviorResult('smooth-scroll');

			scroller.toElement(
				link.getElement(api.getAs(String, 'target'))
			);
		}

	});

})();
