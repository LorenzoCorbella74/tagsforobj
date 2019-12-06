function tagsProto() {
    let tags = new Set(); // is hidden by the factory function...
  
    function evaluateSingleInput(input) {
      if (input.startsWith("!")) {
        return !tags.has(input.substr(1));
      } else {
        return tags.has(input);
      }
    }
  
    return {
      addTag: input => {
        if (Array.isArray(input)) {
          for (let a = 0; a < input.length; a++) {
            tags.add(input[a]);
          }
        } else {
          tags.add(input);
        }
      },
      queryTag: (input, mode = "AND") => {
        if (Array.isArray(input)) {
          if (mode === "AND") {
            return input.every(e => evaluateSingleInput(e));
          } else if (mode === "OR") {
            return input.some(e => evaluateSingleInput(e));
          }
        } else {
          return evaluateSingleInput(input);
        }
      },
      deleteTag: input => {
        if (Array.isArray(input)) {
          for (let a = 0; a < input.length; a++) {
            tags.delete(input[a]);
          }
        } else {
          tags.delete(input);
        }
      },
      clearTags: () => {
        tags.clear();
      },
      sizeTags: () => tags.size,
      getTags: () => tags
    };
  }
  
  export function tagsEnabler(obj) {
    // return Object.assign(Object.create(tagsProto()), obj);
    return Object.setPrototypeOf(obj, tagsProto());
  }

  