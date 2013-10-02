/*
---
description: ...
provides: [Delegator.gallery-show]
requires: [Behavior/Delegator, Core/Element, Behavior.slide]
script: Delegator.Gallery.Show.js
name: Delegator.gallery-show

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

(function(){

	Delegator.register('click', 'gallery-show', {

		require: ['element'],

		defaults: {
			target: '!div > [data-behavior="slide"], !div > * > [data-behavior="slide"], !body [data-behavior="slide"], !div > [data-behavior="line"], !div > * > [data-behavior="line"], !body [data-behavior="line"]'
		},

		handler: function(event, link, api) {
			event.stop();
			var target = link.getElement(api.getAs(String, 'target'));
			if (!target) {
				api.fail('could not locate target slide where to show the element', link);
			}
			var slide = target.getBehaviorResult('slide') || target.getBehaviorResult('line');

			var element = link.getElement(api.getAs(String, 'element'));
			if (!element) {
				api.fail('could not locate element to show in target slide', link);
			}
			var slideElement = element.getBehaviorResult('gallery-element');

			slide.show(slideElement);
		}

	});

})();