document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('add-note').onclick = function() {
		var newNote = new Note()
		addTextToNote(newNote);
		document.getElementById('new-note-text').value = '';
	};

	addTextToNote = function(newNote) {
		var noteText = document.getElementById('new-note-text').value
		newNote.text = noteText;
		if (noteText.length != 0) {
			addChildParentRelation(newNote);
		}
	};

	addChildParentRelation = function(newNote) {
		var ParentNotesList = document.getElementById('notes');
		var ChildNote = document.createElement('li');
		ChildNote.innerHTML = checkNoteTooLong(newNote)
		ParentNotesList.appendChild(ChildNote);
	}

	checkNoteTooLong = function(newNote) {
		if (newNote.text.length > 20) {
			return newNote.abbreviate() + '...';
		}
		return newNote.text
	}
});
