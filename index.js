class Formatter {
  //add static methods here
  static capitalize (string){
    return string.charAt(0).toUpperCase() + string.slice(1)
  }
  static sanitize (string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '')
  }
  static titleize (string){
    //split by " " to get an array of words,  
    const words = string.split(" ");
    const output = [];
    //then run switch to check for cases: the, a, an, but, of, and, for, at, by, and from
    words.forEach(element => {
      switch (element) {
        case "the":
          output.push(element)
          break;
        case "a":
          output.push(element)
          break;
        case "an":
          output.push(element)
          break;
        case "but":
          output.push(element)
          break;
        case "of":
          output.push(element)
          break;
        case "and":
          output.push(element)
          break;
        case "for":
          output.push(element)
          break;
        case "at":
          output.push(element)
          break;
        case "by":
          output.push(element)
          break;
        case "from":
          output.push(element)
          break;
        //Call capitalize on all words except these ones and store them in   
        default:
          output.push(this.capitalize(element));
      }
    });
    output[0] = this.capitalize(output[0]);
    return output.join(" ")
  }
}
