"use strict";

function Note() {
  this.text = "";
  this.abbreviate = function() {
    this.shortText = this.text.slice(0, 20);
  };
}
