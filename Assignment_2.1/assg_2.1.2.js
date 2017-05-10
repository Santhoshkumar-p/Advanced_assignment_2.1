let obj = {first: 'raman', last: 'rhaghav', dob:'04/10/1996'};
let {first: f, last: l, dob: d} = obj;

function display(){
  return `First Name: ${f} \nLast Name: ${l} \nDate of Birth: ${d}`;
}

console.log(display());