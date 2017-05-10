function Person(name) {
    this.name = name;
}

Person.prototype.prefixName = function (arr) {
    return arr.map(character => {
      return `${this.name}${character}`;
    }, this);
};

let raghav = new Person('raghav');
console.log(raghav.prefixName([' agarwal',' gupta',' sahi']));