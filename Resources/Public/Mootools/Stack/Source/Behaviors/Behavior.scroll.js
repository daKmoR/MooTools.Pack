/*
---
name: Behavior.Scroll
description: Adds a SmoothScroll interface to the input.
provides: [Behavior.scroll]
requires: [Behavior/Behavior, More/Fx.Scroll]
script: Behavior.Scroll.js

...
*/

Behavior.addGlobalFilter('scroll', {

	defaults: {
		element: '!body'
	},

	setup: function(element, api) {
		return new Fx.Scroll(element.getElement(api.getAs(String, 'element')));
	}

});