"use strict";

  var assert = new Assert();
  var note = new Note();

  function createNewNote() {
    var message = "Team Barefoot!";
    document.getElementById('new-note-text').value = message;
    document.getElementById('add-note').click();
    assert.hasContent('notes', message);
  }

  function displayAbbreviatedNote() {
    document.getElementById('new-note-text').value = "Team Barefoot, we put our shoes at the end of the day like everyone else";
    document.getElementById('add-note').click();
    assert.hasContent('notes', "Team Barefoot, we pu...");
  }

  function onlyAddNoteWhenNotEmpty() {
    var listLengthBefore = document.getElementsByTagName('li').length;
    document.getElementById('new-note-text').value = '';
    document.getElementById('add-note').click();
    var listLengthAfter = document.getElementsByTagName('li').length;
    assert.isEqual(listLengthBefore, listLengthAfter);
  };

  function runFeatureTests() {
    createNewNote();
    displayAbbreviatedNote();
    onlyAddNoteWhenNotEmpty();
    console.log('Feature Tests Passed | Team BearFoot!');
  }
