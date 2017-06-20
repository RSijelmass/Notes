"use strict";

var assert = new Assert();
var note = new Note();

function createNewNote() {
  assert.isTrue(note);
}

function addNoteText() {
  note.text = "Here's a new note"
  assert.isEqual(note.text, "Here's a new note");
}

function abbreviateNote() {
  note.text = "Such an exciting new note that we have here!";
  note.abbreviate()
  assert.isEqual(note.shortText, "Such an exciting new");
};

function runTests() {
  createNewNote();
  addNoteText();
  abbreviateNote();
  console.log('Tests Passed | Team BearFoot!');
}

runTests();
