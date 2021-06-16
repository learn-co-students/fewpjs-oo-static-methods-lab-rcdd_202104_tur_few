class Formatter {
  
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize (string) {
    let words = string.split(' ');

    for(let i = 0; i < words.length; i++){
      let unwantedRegex = /^.*\b(the|a|an|but|of|and|for|at|by|from)\b.*$/gm;

      if (i === 0) {
        words[i] = this.capitalize(words[i]);
      }
      if (unwantedRegex.test(words[i])){
        words[i] = words[i].toLowerCase();
      }
      else {
        words[i] = this.capitalize(words[i]);
      }
    }
    return words.join(' ');
  }
}


// class Formatter {
//   static capitalize(string) {
//       return string.charAt(0).toUpperCase() + string.slice(1);
//     }
    
//   static titleize(sentence) {
//     let splitSentence = sentence.split(' ')
//     for(let i = 0; i < splitSentence.length; i++) {
//       let the ="the"
//       if(splitSentence[i].includes("the"|| "a" || "an" || "but" || "of" || "and" || "for" || "at" || "by" || "and" || "from")) {
//         splitSentence[i] = splitSentence[i].toLowerCase()
//         console.log(splitSentence[i].includes("the"|| "a" || "an" || "but" || "of" || "and" || "for" || "at" || "by" || "and" || "from"))
//       } else {
//         splitSentence[i] = splitSentence[i][0].toUpperCase() + splitSentence[i].slice(1)
//         console.log(splitSentence[i])
//       }
//     }
//     console.log(splitSentence)
//     return splitSentence.join(" ")
//   }
// }

// let sentence = Formatter.titleize("I am the boss")
// console.log(sentence)

