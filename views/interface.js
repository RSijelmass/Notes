document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('add-note').onclick = function() {
		var newNote = new Note()
		var noteText = document.getElementById('new-note-text').value

		newNote.text = noteText;

		var notesList = document.getElementById('notes');
		var note = document.createElement('li');
		note.innerHTML = newNote.text; 

		notesList.appendChild(note);
	};

});
