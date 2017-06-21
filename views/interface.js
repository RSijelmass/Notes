document.addEventListener('DOMContentLoaded', function() {

	//clickNotes();

	document.getElementById('add-note').onclick = function() {
		var newNote = new Note()
		addTextToNote(newNote);
		document.getElementById('new-note-text').value = '';
	};

	clickNotes = function() {
		var notes = document.getElementsByTagName('ul');
		console.log(notes);

		function capture() {
			console.log('capture: ' + this.firstChild.nodeValue.trim());
			console.log(notes)
		};

		function bubble() {
			console.log('bubble :' + this.firstChild.nodeValue.trim());
		};

		for(var i=0; i < notes.length; i++) {
			notes[i].addEventListener('click', capture, true);
			notes[i].addEventListener('click', bubble, false);
		};
	};

	clickNotes();

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
