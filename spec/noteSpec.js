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

function runTests() {
  createNewNote();
  addNoteText();
  console.log('Tests Passed | Team BearFoot!');
}

runTests();
