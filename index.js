class Formatter {
   static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }

  static titleize(string) {
    const noCap = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let title = '';

    let titles = string.split(' ').map((word, index) => {
      if(noCap.includes(word) && index != 0)
        return word;
      return this.capitalize(word);
    })

    return titles.join(' ');
  }
}

