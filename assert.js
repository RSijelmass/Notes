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

  this.isEqual = function(testSubject, expectedResult) {
    if (testSubject !== expectedResult ) {
      throw new Error("Expected " + testSubject + " to be Equal to " + expectedResult + "." );
    }
    return (testSubject + " is Equal to " + expectedResult);
  };
}

var assert = new Assert();
