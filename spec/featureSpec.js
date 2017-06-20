"use strict";

  var assert = new Assert();
  var note = new Note();

  function createNewNote() {
    var message = "Team Barefoot, we put our shoes at the end of the day like everyone else";
    document.getElementById('new-note-text').value = message;
    document.getElementById('add-note').click();
    assert.hasContent('notes', message);
  };

  function runFeatureTests() {
    createNewNote();
    console.log('Feature Tests Passed | Team BearFoot!');
  }
