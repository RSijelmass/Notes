"use strict";

var note;

function NoteComponent(note) {
  this.note = note;

	this.setup = function() {
		var el = document.createElement('li');
		el.innerHTML = note.abbreviate();
		el.addEventListener("click", function() {
      document.getElementById('long-note').innerHTML = note.text
    });
		return el;
	};

	this.render = function() {
		var el = this.setup()
		var list = document.getElementById('notes');
		list.appendChild(el);
	};

}
