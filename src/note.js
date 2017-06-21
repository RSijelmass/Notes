"use strict";

function Note() {
  this.text = "";

	this.abbreviate = function() {
    if(this.isTooLong()) {
			return this.text.slice(0, 20) + '...';
  	}
		return this.text;
	};
	
	this.isTooLong = function() {
		if(this.text.length > 20) { return true }
	}
}
