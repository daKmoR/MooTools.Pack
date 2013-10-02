/*
---
name: Behavior.Gallery.Element
description: ...
provides: [Behavior.gallery-element]
requires: [Behavior/Behavior, More/Object.Extras, Gallery.Image, Gallery.Div, Gallery.Link.Request, Behavior.slide]
script: Behavior.Gallery.Element.js

Example:
<div data-behavior="slide" data-slide-duration="4000" class="...">
	<img data-behavior="gallery-element" src="..." alt="..." />
	<img data-behavior="gallery-element" src="..." alt="..." />
</div>
<div data-behavior="gallery-pagination" class="..."></div>

...
*/

Behavior.addGlobalFilter('gallery-element', {

	defaults: {
		target: '![data-behavior="slide"], ![data-behavior="line"]',
		type: 'auto',
		isstartelement: null,
		width: null,
		height: null,
		adjust: null,
		requestfilter: null,
		hidefx: null
	},

	setup: function(element, api) {
		var target = element.getElement(api.getAs(String, 'target'));
		var slide = target.getBehaviorResult('slide') || target.getBehaviorResult('line');
		var options = Object.cleanValues({
			isStartElement: api.getAs(Boolean, 'isstartelement'),
			size: Object.cleanValues(
				api.getAs({
					width: Number,
					height: Number
				})
			),
			hideFx: api.getAs(String, 'hidefx')
		});

		Object.merge(options, Object.cleanValues(
			api.getAs({
				requestfilter: String,
				adjust: String
			})
		));

		var slideElement = slide.addElement(element, options);
		slideElement.addEvent('onLinkRequestLoaded', function(div) {
			api.applyFilters(div);
		});
		return slideElement;
	}

});