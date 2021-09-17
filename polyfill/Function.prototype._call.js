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

Function.prototype._call = function () {
	var obj = arguments[0] || window
	obj.tmpFunc = this
	var args = []
	for (var index = 1; index < arguments.length; index++) {
		args.push('arguments[' + index + ']')
	}
	var result =  eval('obj.tmpFunc('+ args +')')
	delete obj.tmpFunc
	return result
}

var greeting = intro._call(person, 1, 2, 3)
console.log(greeting)