/*
---
name: Behavior.gallery-pagination
description: ...
provides: [Behavior.gallery-pagination]
requires: [Behavior/Behavior, Gallery.Pagination, Behavior.slide, Delegator.gallery-show]
script: Behavior.Gallery.Pagination.js

Example Simple:
<div data-behavior="slide" data-slide-duration="4000" class="...">
	<img data-behavior="gallery-element" src="..." alt="..." />
	<img data-behavior="gallery-element" src="..." alt="..." />
</div>
<div data-behavior="gallery-pagination" class="..."></div>

Example Centered with Style Behavior:
<div data-behavior="gallery-pagination" data-style-property="margin-left" data-style-from-property="width" data-style-invert="true" data-style-divide="2"></div>

...
*/

Behavior.addGlobalFilter('gallery-pagination', {

	defaults: {
		target: '!div > [data-behavior="slide"], !div > * > [data-behavior="slide"], !body [data-behavior="slide"], !div > [data-behavior="line"], !div > * > [data-behavior="line"], !body [data-behavior="line"]'
	},

	setup: function(element, api) {
		var target = element.getElement(api.getAs(String, 'target'));
		var slide = target.getBehaviorResult('slide') || target.getBehaviorResult('line');
		var options = {};

		slide.createPagination(element, options);
		return slide;
	}

});