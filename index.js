class Formatter {
  static capitalize( string ) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }

  static sanitize( string ) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }

  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}





// class Formatter {
//   //add static methods here
//   static capitalize(string){
//     return string.charAt(0).toUpperCase() + string.slice(1)
//   }



//   static sanitize(char){
//     return char.replace(/[^A-Z a-z 0-9-' ]+/gm, "")
//   }



//   static titleize(words){
//     let thisIsArray = words.split(" ")

//     let emptyArray = []
    
//     for(let i = 0; i < thisIsArray.length; i++){
//       if(thisIsArray[i] !== "the" || thisIsArray[i] !== "a" || thisIsArray[i] !== "an" || thisIsArray[i] !== "but" || thisIsArray[i] !== "of" || thisIsArray[i] !== "and" || thisIsArray[i] !== "for" || thisIsArray[i] !== "at" || thisIsArray[i] !== "by" || thisIsArray[i] !== "from"){
//         emptyArray.push(thisIsArray[i].charAt(0).toUpperCase() + thisIsArray[i].slice(1))
//       }
//       else{
//         emptyArray.push(thisIsArray[i])
//       }

//     }
//     return emptyArray.join(" ")
//   }
// }