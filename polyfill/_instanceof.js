function _instanceof(leftValue, rightValue) {
  const baseTypes = ['number', 'string', 'boolean', 'symbol', 'undefined', 'bigint']
  if (baseTypes.includes(typeof leftValue)) {
    return false
  }

  let left = leftValue.__proto__
  let right = rightValue.prototype
  while (true) {
    if (left === null) {
      return false
    }
    if (left === right) {
      return true
    }
    left = left.__proto__
  }
}

/* test case */
console.log(_instanceof(Number.MAX_SAFE_INTEGER, Number))