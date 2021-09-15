function _new() {
  const constructor = Array.prototype.shift.call(arguments)
  let obj = new Object();
  obj.__proto__ = constructor.prototype;
  let consReturn = constructor.apply(obj, arguments)
  return typeof consReturn === 'object' ? consReturn : obj
}

/* test */
function Person(name,age) {
  this.name = name;
  this.age = age;

  return {
    sex: 'male',
    job: 'student'
  }
}

let Jake = _new(Person,'Jake', 19);
console.log(Jake)