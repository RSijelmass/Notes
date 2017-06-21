"use strict";

var assert = new Assert();
var note = new Note();

function addNoteText() {
  note.text = "Here's a new note"
  assert.isEqual(note.text, "Here's a new note");
}

function abbreviateNote() {
  note.text = "Such an exciting new note that we have here!";
  assert.isEqual(note.abbreviate(), "Such an exciting new");
};

function runUnitTests() {
  noteComponentHasNote();
  addNoteText();
  abbreviateNote();
  console.log('Tests Passed | Team BearFoot!');
}
