"use strict";

var assert = new Assert();

function noteComponentHasNote() {
  var note = new Note();
  note.text = "Bearfeet";
  var noteComponent = new NoteComponent(note);
  assert.isEqual(noteComponent.note, note);
}
