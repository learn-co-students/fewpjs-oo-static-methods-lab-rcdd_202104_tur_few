class Formatter {
  //add static methods here
  static capitalize(string){
      let x=string[0].toUpperCase() + string.slice(1);
      return x;
  }
  static sanitize(string){
    string  = string.replace(/[^a-zA-Z0-9 '-]/g, "");
    return string
  }
  
  static titleize(string) {
    let array = string.split(' ')
  
    let newArray = []
   
    array.map(word => {
      if ( word !== 'the' && word !== 'a' && word !== 'an' && word !== 'but' && word !== 'of' && word !== 'and' && word !== 'for' && word !== 'at' && word !== 'by' && word !== 'from') {
        newArray.push(word.charAt(0).toUpperCase() + word.slice(1))
      }
        else {
          newArray.push(word)
        }
    })
    return newArray.join(' ').charAt(0).toUpperCase() + newArray.join(' ').slice(1)
  }
}