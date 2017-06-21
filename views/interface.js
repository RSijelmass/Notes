document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('add-note').onclick = function() {
		var newNote = new Note()
		addTextToNote(newNote);

		var noteComponent = new NoteComponent(newNote);
		renderNote(newNote, noteComponent)	

		document.getElementById('new-note-text').value = '';
	};

	addTextToNote = function(newNote) {
		newNote.text = document.getElementById('new-note-text').value
	};

	renderNote = function(newNote, noteComponent) {
		if (newNote.text.length != 0) {
			noteComponent.render();
		}
	}

});
