const asyncAll = arr => {
    let result = [];    //用于存放每次执行后返回结果
    return new Promise((resolve, reject) => {
        for (let i = 0; i < arr.length; i++) {
            next(i);    // 开始逐次执行数组中的函数(重要)
            const next = (i) => {
                arr[i].then((res) => {
                    result.push(res)    // 存储每次得到的结果
                    if (i == arr.length) {    // 如果函数数组中的函数都执行完，便resolve
                        resolve(result)
                    } else {
                        next()
                    }
                }, () => {
                    reject()
                })
            }
        }
    })
}