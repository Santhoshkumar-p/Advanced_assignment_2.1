function scope() {
  let name;
  if(true) {
    name = "raman raghav";
    let country = "India";
    console.log(`Name(inside): ${name}`);
    console.log(`Country(inside): ${country}`);
  }
  console.log('------Outside block-------');
  console.log(`Name(outside): ${name}`);
  console.log(`Country(outside): ${country}`);
}

scope();