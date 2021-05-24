class Formatter {

  static capitalize(string) {
    let letters = string.split("");
    letters[0] = letters[0].toUpperCase();
    return letters.join("");
  };

  static sanitize(string) {
    string = string.replace(/[^\'-\w\s]/gi, "");
    return string;
  };

  static titleize(sentence) {

    let words = sentence.split(" ");
    console.log(words)

    let formattedWords = words.map(function(word) {

      let wordsNotToCapitalise = ["the", "but", "of", "for", "at", "by", "from", "a", "an", "and"];
      
      if (word === words[0]) {
        
        let letters = word.split("");
        letters[0] = letters[0].toUpperCase();
        console.log("yoo")
        let formattedWord = letters.join("");
        console.log(formattedWord);
        return formattedWord;
      }

      let i = 0;
      while (i < wordsNotToCapitalise.length) {

        if (word === wordsNotToCapitalise[i]) {
          return word;
        }

        i++;
      };

      if (word !== wordsNotToCapitalise[i]) {

        let letters = word.split("");
        letters[0] = letters[0].toUpperCase();
        let formattedWord = letters.join("");
        console.log(formattedWord);
        return formattedWord;
      }


    });

    console.log(formattedWords);
    let formattedSentence = formattedWords.join(" ");
    console.log(formattedSentence);
    return formattedSentence; 


    // let regex = /the|but|of|for|at|by|from|a|an|and|are/g;

    // let words = sentence.split(" ");
    // let processedWords = words.map(function(word) {
    //   if (regex.test(word) === false) {
    //     let letters = word.split("");
    //     letters[0] = letters[0].toUpperCase();
    //     let processedWord = letters.join("");
    //     return processedWord; 
    //   }
    //   else {
    //     return word;
    //   }
    // })
    // let processedSentence = processedWords.join(" ");
    // console.log(processedSentence)
    // return processedSentence;
  };
};

Formatter.titleize("getting giggles");