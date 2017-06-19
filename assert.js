function Assert() {
  this.isTrue = function(assertion) {
    if (!assertion) {
      throw new Error("Expected " + assertion + " to be True.");
    }
    return (assertion + " is true");
  };

  this.isFalse = function(assertion) {
    if (assertion) {
      throw new Error("Expected " + assertion + " to be False.");
    }
    return (assertion + " is false");
  };

  this.isEqual = function(itemOne, itemTwo) {
    if (itemOne !== itemTwo ) {
      throw new Error("Expected " + itemOne + " to be Equal to " + itemTwo + "." );
    }
    return (itemOne + " is Equal to " + itemTwo);
  };
}

var assert = new Assert();
