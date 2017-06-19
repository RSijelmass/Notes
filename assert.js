var assert = {
  isTrue: function(assertion) {
    if (!assertion) {
      throw new Error("Expected False to be True");
    }
    return (assertion + " is true")
  }
};
