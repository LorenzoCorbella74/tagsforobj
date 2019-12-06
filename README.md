# TAGS for JS Object

![](https://img.shields.io/badge/type-JS_Library-brightgreen.svg "Project type")
![](https://img.shields.io/github/repo-size/LorenzoCorbella74/tagsforobj "Repository size")
![](https://img.shields.io/github/package-json/v/LorenzoCorbella74/tagsforobj)

A micro library to study ES6 (ES2015) SET Object type, able to add tags to JS Object.


## Documentation
```javascript
import {tagsEnabler} from 'tagsforobj';

let testObj = { name: "MAXPAYNE" };

testObj = tagsEnabler(testObj);

let test = new Second('TEST');
console.log(test)
test = tagsEnabler(test)
console.log(test)
test.addTag('prova')
console.log(test.queryTag('prova'), test.getTags());

console.log("---------------- test obj 1 -------------------");
console.log(testObj); // {name: "MAXPAYNE" } prototype is not visible

// ADD
testObj.addTag("man");
testObj.addTag("football player");
// HAS
console.log(testObj.queryTag("man")); // true

// DELETE
testObj.deleteTag("man");
console.log(testObj.queryTag("man")); // false

// SIZE
testObj.addTag("dad");
testObj.addTag("guitar player");
console.log(testObj.sizeTags()); // 3

// CLEAR
testObj.clearTags();
console.log(testObj.sizeTags()); // 0

// ADD MULTIPLE
testObj.addTag(["dad", "guitar player", "developer", "engineer"]);
console.log(testObj.sizeTags()); // 4

// DELETE MULTIPLE
testObj.deleteTag(["guitar player", "dad", "random"]); // true
console.log(testObj.queryTag("dad")); // false

// HAS MULTIPLE
console.log("--------------- has multiple ------------------");
console.log(testObj.queryTag(["developer", "engineer"])); // AND CONDITION is the DEFAULT
console.log(testObj.queryTag(["developer", "dad"]));
console.log(testObj.queryTag(["dad", "developer"], "OR")); // OR CONDITION
console.log(testObj.queryTag("!dad")); // IF DIFFERENT with !
console.log(testObj.queryTag(["developer", "!dad", "engineer"]));
```

### Todo
- [ ] better query system


## Bugs
- Uhm...

## Built With

ES6 Javascript, [microbundle](https://github.com/developit/microbundle),

## Versioning

Versione 0.0.3

## License

This project is licensed under the ISC License.