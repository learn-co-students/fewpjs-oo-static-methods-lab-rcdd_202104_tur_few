class Formatter {
  //add static methods here

  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    string = string.replace(/[^a-zA-Z0-9 '-]/g, "");
    return string
  }

  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let arrayOfWords = sentence.split(" ")
    for (let n = 0; n < arrayOfWords.length; n++) {
      if (n == 0) {
        result.push(this.capitalize(arrayOfWords[n]))
      } else {
        if (exceptions.includes(arrayOfWords[n])) {
          result.push(arrayOfWords[n])
        } else {
          result.push(this.capitalize(arrayOfWords[n]))
        }
      }

    }
    return result.join(" ");
  }


}