function a() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(123)
        }, 3000)
    })
}

function b() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(456)
        }, 2000)
    })
}

async function xyz() {
    //모든 비동기를 한번에 실행 가능, 순서 보장 x
    const [x, y] = await Promise.all([
        a(),
        b()
    ])
    // const x = await a()
    // const y = await b()
    console.log(x)
    console.log(y)
}
xyz()