# TAGS for JS Objects

![](https://img.shields.io/badge/type-JS_Library-brightgreen.svg "Project type")
![](https://img.shields.io/github/repo-size/LorenzoCorbella74/tagsforobj "Repository size")
![](https://img.shields.io/github/package-json/v/LorenzoCorbella74/tagsforobj)

A micro library to study ES6 (ES2015) SET Object type, able to add tags to JS Objects.


## Documentation
```javascript
import {tagsEnabler} from 'tagsforobj';

let testObj = { name: "MAXPAYNE" };

testObj = tagsEnabler(testObj);

console.log(testObj); // {name: "MAXPAYNE" } tags are in the prototype...

// ADD
testObj.addTag("man");  // string
testObj.addTag("football player"); // tags can have whitespaces
testObj.addTag(["dad", "guitar player", "developer", "engineer"]);  // array of strings

// DELETE
testObj.deleteTag("man");
console.log(testObj.queryTag("man")); // false
testObj.deleteTag(["guitar player", "dad", "random"]);
console.log(testObj.queryTag("dad"));     // false

// HAS
console.log(testObj.queryTag("man")); 
console.log(testObj.queryTag(["developer", "engineer"])); // AND CONDITION is the DEFAULT
console.log(testObj.queryTag(["developer", "dad"]));
console.log(testObj.queryTag(["dad", "developer"], "OR")); // OR CONDITION
console.log(testObj.queryTag("!dad")); // ! to invert the condition
console.log(testObj.queryTag(["developer", "!dad", "engineer"]));

// CLEAR / SIZE
testObj.clearTags();
console.log(testObj.sizeTags()); // 0
```

### Todo
- [ ] better query system


## Bugs
- Uhm...

## Built With

ES6 Javascript, [microbundle](https://github.com/developit/microbundle),

## Versioning

Versione 0.0.5

## License

This project is licensed under the ISC License.