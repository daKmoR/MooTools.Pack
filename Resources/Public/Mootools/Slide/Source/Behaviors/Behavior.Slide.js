/*
---
name: Behavior.Slide
description: Adds a slide interface
provides: [Behavior.slide]
requires: [Behavior/Behavior, Slide, Delegator.SlideControls]
script: Behavior.Slide.js

Example Simple:
<div class="gallery">
	<div data-behavior="slide" data-slide-duration="4000" class="...">
		<img data-behavior="gallery-element" src="..." alt="..." />
		<img data-behavior="gallery-element" src="..." alt="..." />
	</div>
	<div data-behavior="gallery-pagination"></div>
	<button data-trigger="gallery-next"><span>next</span></button>
	<button data-trigger="gallery-previous"><span>previous</span></button>
</div>

...
*/

Behavior.addGlobalFilter('slide', {

	defaults: {
		'containerposition': false,
	},

	setup: function(element, api) {
		var options = {};

		Object.merge(options, Object.cleanValues(
			api.getAs({
				auto: Boolean,
				duration: Number
			})
		));

		if (api.getAs(Boolean, 'containerposition')) {
			options.containerPosition = { position: 'center' };
		}

		return new Slide(element, options);
	}

});