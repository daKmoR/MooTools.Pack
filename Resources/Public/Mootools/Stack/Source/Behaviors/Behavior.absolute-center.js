/*
---
name: Behavior.absolute-center
description: Adds a Style interface
provides: [Behavior.absolute-center]
requires: [Behavior/Behavior, Core/Element.Dimensions]
script: Behavior.absolute-center.js

...
*/

/**
 * Reads height of the element and sets it. Afterwards adds a css class.
 *
 * = Examples =
 * <code title="Default">
 *   <div data-behavior="absolute-center">[...]</div>
 * </code>
 * <output>
 *   <div data-behavior="absolute-center" style="height: 200px; width= 100px" class="absolute-center">[...]</div>
 * </output>
 *
 * <code title="Options">
 *   class: (defaults to 'absolute-center') css class to set after height is set
 *   set-height: (default to true) calculate and set height before adding the css class
 *   set-width: (default to true) calculate and set width before adding the css class
 * </code>
 * <output>
 * </output>
 *
 */

(function(){

Behavior.addGlobalFilter('absolute-center', {

	defaults: {
		'class': 'absolute-center',
		'set-height': true,
		'set-width': true
	},

	setup: function(element, api) {
		var dimensions = element.getCoordinates();
		if (api.getAs(Boolean, 'set-height') === true) {
			element.setStyle('height', 'auto');
			var height = dimensions['height'] - element.getStyle('padding-top').toInt() - element.getStyle('padding-bottom').toInt();
			element.setStyle('height', height);
		}
		if (api.getAs(Boolean, 'set-width') === true) {
			element.setStyle('width', 'auto');
			element.setStyle('display', 'inline-block');
			var width = dimensions['width'] - element.getStyle('padding-left').toInt() - element.getStyle('padding-right').toInt();
			element.setStyle('width', width);
			element.setStyle('display', '');
		}

		element.addClass(api.getAs(String, 'class'));
	}

});

})();