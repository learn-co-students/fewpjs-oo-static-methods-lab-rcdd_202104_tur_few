class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }
  
  static titleize(string) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let words = [];
    let arrayOfSplitedWords = string.split( " " )
    for (let n = 0; n < arrayOfSplitedWords.length; n++) {
      if (n === 0) {
        words.push(this.capitalize(arrayOfSplitedWords[n] ) )
      } else {
        if (exceptions.includes(arrayOfSplitedWords[n])) {
          words.push(arrayOfSplitedWords[n])
        } else {
          words.push(this.capitalize(arrayOfSplitedWords[n]))
        }
      }
    }
    return words.join(" ");
   }
}