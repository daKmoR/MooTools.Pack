/*
---

name: Gallery.Pagination
description: Gallery Pagination for Gallery
license: MIT-style license
authors:
  - Thomas Allmer
requires: [Gallery]
provides: [Gallery.Pagination]

...
*/

Gallery.Pagination = new Class({

	Implements: [Options, Chain, Events],

	options: {
		template: '<button data-trigger="gallery-show" data-gallery-show-element="' +
							'!div > [data-behavior=\'slide\'] [data-behavior=\'gallery-element\']:nth-child({cycle}),' +
							'!div > * > [data-behavior=\'slide\'] [data-behavior=\'gallery-element\']:nth-child({cycle}),' +
							'!body [data-behavior=\'slide\'] [data-behavior=\'gallery-element\']:nth-child({cycle})' +
							'"><span>{cycle}</span></button>',
		activeClass: 'active',
		forceShow: false
	},

	element: null,
	items: [],

	initialize: function (element, slide, options) {
		this.setOptions(options);
		this.slide = slide;
		this.element = element;

		this.build();

		this.slide.addEvent('show', function(element) {
			this.items.each(function(item) {
				if (item.element === element) {
					item.addClass(this.options.activeClass);
				} else {
					item.removeClass(this.options.activeClass);
				}
			}, this);
		}.bind(this));
	},

	build: function() {
		if (this.slide.elements.length > 1 || this.options.forceShow === true) {
			this.slide.elements.each(function(element, i) {
				var paginationItem = this.options.template.substitute({
					index: i,
					cycle: i+1
				});

				var temp = new Element('div');
				temp.set('html', paginationItem);
				paginationItem = temp.getElement('*');
				paginationItem.element = element;
				this.items.push(paginationItem);
				paginationItem.inject(this.element);
			}, this);
		}
	}

});

Gallery.implement({

	createPagination: function(element, options) {
		return new Gallery.Pagination(element, this, options);
	}

});