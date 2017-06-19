function Assert() {
  this.isTrue = function(assertion) {
    if (!assertion) {
      throw new Error("Expected" + assertion + " to be True");
    }
    return (assertion + " is true");
  };

  this.isFalse = function(assertion) {
    if (assertion) {
      throw new Error("Expected" + assertion + " to be False");
    }
    return (assertion + " is false");
  };
}

var assert = new Assert();
