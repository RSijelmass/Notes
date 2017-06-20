document.addEventListener('DOMContentLoaded', function() {

	//clickNotes();

	document.getElementById('add-note').onclick = function() {
		var newNote = new Note()
		addTextToNote(newNote);
		addChildParentRelation(newNote)
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

	addTextToNote = function(note) {
		var noteText = document.getElementById('new-note-text').value
		note.text = noteText;
	};

	addChildParentRelation = function(newNote) {
		var ParentNotesList = document.getElementById('notes');
		var ChildNote = document.createElement('li');
		ChildNote.innerHTML = newNote.text;

		ParentNotesList.appendChild(ChildNote);
	}
});
