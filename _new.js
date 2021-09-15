function _new() {
  const constructor = Array.prototype.shift.call(arguments)
  // ---------------------
  // let obj = new Object();
  // obj.__proto__ = constructor.prototype;
  // ---------------------
  // or just
  // ---------------------
  let obj = Object.create(constructor.prototype)
  let consReturn = constructor.apply(obj, arguments)
  // null is not instanceof Object so automatically excluded
  return consReturn instanceof Object ? consReturn : obj
}

/* test */
function Person(name,age) {
  this.name = name;
  this.age = age;

  return null
}

let Jake = _new(Person,'Jake', 19);
console.log(Jake)