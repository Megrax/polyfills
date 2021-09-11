Function.prototype._bind = function () {
  var that = this;
  var obj = arguments[0]
  var arr1 = Array.prototype.slice.call(arguments, 1)
  return function () {
    var arr2 = Array.prototype.slice.call(arguments, 0);
    var arr = arr1.concat(arr2)
    that.apply(obj,arr)
  }
}

var person = {
  name: 'Mike'
}

function intro(a, b, c) {
  console.log(this.name)
  console.log(a,b,c)
  return {
    name: this.name,
    nums: {
      a: a, b: b, c: c
    }
  }
}
intro._bind(person,1,2)(4);