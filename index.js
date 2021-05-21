class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^A-Za-z0-9-'\s]+/g, "");
  }

  static titleize(str) {
    str = str.toLowerCase();
    str = this.capitalize(str);
    const outter = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const strArr = str.split(" ").map(element => {
      if (!outter.includes(element)) return this.capitalize(element);
      else return element;
    });

    return strArr.join(" ");
  }
}
