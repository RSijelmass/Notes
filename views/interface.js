document.addEventListener('DOMContentLoaded', function() {

	document.getElementById('add-note').onclick = function() {
		var notesList = document.getElementById('notes');
		var note = document.createElement('li');
		note.innerHTML = 'Test Note';

		notesList.appendChild(note);
		//	document.ul.appendChild(document.createElement('li'));
	};

});
