## 实现flatten

解法一:
```bash
function flatten(arr) {
    return arr.toString().split(',').map(Number)
}
```

解法二：
```bash
const flatten = (arr) => {
    let result = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] instanceof Array) {
            result = result.concat(flatten(arr[i]))
        } else {
            result.push(arr[i])
        }
    }
    return result
}
```