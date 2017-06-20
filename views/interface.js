document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('add-note').onclick = function() {
		var newNote = new Note()
		addTextToNote(newNote);
		var notesList = document.getElementById('notes');
		var note = document.createElement('li');
		note.innerHTML = newNote.text;

		notesList.appendChild(note);
	};

	addTextToNote = function(note) {
		var noteText = document.getElementById('new-note-text').value
		note.text = noteText;
	};

});
