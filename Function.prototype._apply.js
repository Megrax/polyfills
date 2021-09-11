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

Function.prototype._apply = function () {
	var obj = arguments[0] || window
	obj.tmpFunc = this
	var args = []
  if (arguments[1]) {
    for (var index = 0; index < arguments[1].length; index++) {
      args.push('arguments[1][' + index + ']')
    }
  }
	var result =  eval('obj.tmpFunc('+ args +')')
	delete obj.tmpFunc
	return result
}

var greeting = intro._apply(person, [1, 2, 3])
console.log(greeting)