# Notes

A simple one-page notes app where one can save all their thoughts and ideas for screenplays. Displayed are all previous notes (from one session) in a list, displaying the abbreviated notes.

If one would like to see what a previous note entailed, one only has to click on the abbreviated text and the note is displayed.

### Technologies Used
JavaScript

### Testing Framework
The testing framework has been created from scratch [...].
The framework is called 'assert', and works as the following:

##### Tests:
- `assert.isTrue(statement);` - checks if a statement (boolean) is true. Note that it does not check if it is truthy.
- `assert.isFalse(statement);` - checks if a statement (boolean) is false. Note that it does not check if it is falsy.
- `assert.isEqual(testSubject, expectedResult);` - checks if two attributes are equal (e.g. "hello" and "hello")
- `assert.hasContent(elementID, expectedResult);` - checks if an attribute (e.g. a string) is displayed on the page at a tag with a specific element ID (e.g. check if string "Headline" is found in `<h1 id='headline_one'>`, where elementID is 'headline_one')


### User Stories
```
As a programmer
I can see a list of my notes, where each note is abbreviated to the first 20 characters
So I can find the one I want
```

```
As a programmer
I can create a new note
So I can record something I need to remember
```

```
As a programmer
I can see the full text of an individual note on its own page
So I can see all the information in the note
```
