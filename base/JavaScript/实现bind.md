## 实现一个bind函数

```bash
function bind(fn, context, ...args) {
    return function() {
        return fn.apply(context, [...args, ...arguments]);
    }
}
```
```bash
Function.prototype.bind = function(context, ...args) {
    let _this = this
    return function() {
        return _this.apply(context, [...args, ...arguments]);
    }
}
```