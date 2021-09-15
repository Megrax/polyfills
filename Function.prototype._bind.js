Function.prototype._bind = function() {
  let fToBind = this;
  let thisToBind = arguments[0];
  let args1 = Array.prototype.slice.call(arguments, 1);
  let fTmp = function () { }
  fTmp.prototype = fToBind.prototype;
  let fBound = function() {
    let args2 = Array.prototype.slice.call(arguments);
    let args = args1.concat(args2);
    return fToBind.apply(this instanceof fBound ? this : thisToBind, args);
  }
  fBound.prototype = new fTmp();
  return fBound;
}

/* test */
let jack = {
  name: 'Jack'
}

function getName(age) {
  console.log(this.name)
  if (age) {
    this.age = age;
    console.log(this.age);
  }
}

let bounded = getName._bind(jack);
let newed = new bounded(11);

console.log(jack);
console.log(newed instanceof getName);