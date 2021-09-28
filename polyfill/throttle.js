// 节流函数

function throttle(func, wait) {
  let context, args;
  let previous = 0;
  return function () {
    let now = new Date().getTime();
    if (!previous) {
      previous = now;
    } else {
      context = this;
      args = arguments;
      let remaining = wait - (now - previous);
      if (remaining <= 0) {
        func.apply(context, args);
        previous = now;
        context = args = null;
      }
    }
  }
}

/* test */
