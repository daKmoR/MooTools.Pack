/*
---
description: Gallery Controls
provides: [Delegator.gallery-controls]
requires: [Behavior/Delegator, Core/Element, Behavior.slide, Delegator.gallery-show]
script: Delegator.Gallery.Controls.js
name: Delegator.gallery-controls

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

	var triggers = {};

	['start', 'stop', 'next', 'previous'].each(function(action) {

		triggers['gallery-' + action] = {
			defaults: {
				targets: '!div > [data-behavior="slide"], !div > * > [data-behavior="slide"], !body [data-behavior="slide"], !div > [data-behavior="line"], !div > * > [data-behavior="line"], !body [data-behavior="line"]'
			},
			handler: function(event, link, api) {
				event.stop();
				var targets = link.getElements(api.getAs(String, 'targets'));
				if (!targets) {
					api.fail('could not locate target slide to ' + action + ' it', link);
				}
				targets.each(function(target) {
					var slide = target.getBehaviorResult('slide') || target.getBehaviorResult('line');
					slide[action]();
				});
			}
		};

	});

	Delegator.register('click', triggers);

})();