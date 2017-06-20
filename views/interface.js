document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('add-note').onclick = function() {
		var newNote = new Note()
		addTextToNote(newNote);
		addChildParentRelation(newNote)
		document.getElementById('new-note-text').value = '';
	};

	addTextToNote = function(note) {
		var noteText = document.getElementById('new-note-text').value
		note.text = noteText;
	};

	addChildParentRelation = function(newNote) {
		var ParentNotesList = document.getElementById('notes');
		var ChildNote = document.createElement('li');
		ChildNote.innerHTML = isNoteTooLong(newNote)
		ParentNotesList.appendChild(ChildNote);
	}

	isNoteTooLong = function(newNote) {
		if (newNote.text.length > 20) {
			return newNote.abbreviate() + '...';
		}
		return newNote.text
	}
});
