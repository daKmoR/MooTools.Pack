/*
---
name: Behavior.SmoothScroll
description: Adds a SmoothScroll interface to the input.
provides: [Behavior.smooth-scroll]
requires: [Behavior/Behavior, More/Fx.SmoothScroll]
script: Behavior.SmoothScroll.js

...
*/

Behavior.addGlobalFilter('smooth-scroll', {

	setup: function(element, api) {
		return new Fx.SmoothScroll();
	}

});