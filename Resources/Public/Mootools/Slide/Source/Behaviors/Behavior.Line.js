/*
---
name: Behavior.line
description: Adds a slideLine interface
provides: [Behavior.line]
requires: [Behavior/Behavior, Line]
script: Behavior.Line.js

Example Simple:
<div class="gallery">
	<div data-behavior="line" data-slide-duration="4000" class="...">
		<img data-behavior="gallery-element" src="..." alt="..." />
		<img data-behavior="gallery-element" src="..." alt="..." />
	</div>
	<div data-behavior="gallery-pagination"></div>
	<button data-trigger="gallery-next"><span>next</span></button>
	<button data-trigger="gallery-previous"><span>previous</span></button>
</div>

...
*/

Behavior.addGlobalFilter('line', {

	defaults: {
		'containerposition': false,
		'duration': 4000,
		'element-width': 140,
		'mode': 'Line'
	},

	setup: function(element, api) {
		var options = {};

		if (api.getAs(Boolean, 'containerposition')) {
			options = {
				containerPosition: { position: 'center' }
			};
		}
		options.duration = api.getAs(Number, 'duration');
		options.elementSize = { width: api.getAs(Number, 'element-width') };

		return new Line(element, options);
	}

});