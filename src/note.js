"use strict";

function Note() {
  this.text = "";
  this.abbreviate = function() {
    return this.text.slice(0, 20);
  };
}
