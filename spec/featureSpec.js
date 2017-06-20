"use strict";

  var assert = new Assert();
  var note = new Note();

  function createNewNote() {
    var message = "Team Barefoot, we put our shoes at the end of the day like everyone else";
    document.getElementById('new-note-text').value = message;
    document.getElementById('add-note').click();
    assert.hasContent('notes', message);
  };

	/*function expandNote() {
		var message = "Another Message, full of beary text. So much hair. Hair everywhere.";
		var messageShort = message.slice(0, 20);

    document.getElementById('new-note-text').value = message;
    document.getElementById('add-note').click();
		
		
	};*/

  function runFeatureTests() {
    createNewNote();
    console.log('Feature Tests Passed | Team BearFoot!');
  }
