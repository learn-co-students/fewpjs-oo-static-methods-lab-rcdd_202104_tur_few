class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g,'');
  }
  static titleize(string){
    let splitString = string.split(" ");
    let newArray = splitString.map(word => {
      if(word == 'the' || word == 'a' || word =='an' || word =='but' || word =='of' || word =='and' || word =='for' || word =='at' || word =='by' || word ==='from'){
        return word;s
      }else {
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    string = newArray.join(" ")
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}