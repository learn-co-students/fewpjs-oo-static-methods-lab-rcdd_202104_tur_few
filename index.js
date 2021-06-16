class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    const regex = /[^a-zA-Z0-9-' /]+/g
    return string.replace(regex, "")
  }

  static titleize(string) {
    let words = string.split(' ')
    
    // why doesnt this work when i put the regex there rather than inside the for loop ?

    for(let i =  0; i < words.length; i++) {

      let regex = new RegExp(/.*\b(the|a|an|but|of|and|for|at|by|from)\b.*/gm)

      if(i === 0) {
        words[i] = this.capitalize(words[i])
      }
      if (regex.test(words[i])) {
        words[i] = words[i].toLowerCase()
      }
      else {
        words[i] = this.capitalize(words[i])
      }
    }
    return words.join(' ')
  }
}