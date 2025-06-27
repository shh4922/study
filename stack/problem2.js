/**
 * 10진수 2진수로 변환하기
 * 1 < data < 10억 미만 자연수
 *
 *
 */

function solutions(value) {
    const stack = []
    let data = value

    while (true) {
        stack.push(data%2)
        data = Math.floor(data/2)
        if(data === 0) {
            break
        }
    }
    return Number(stack.reverse().join(""))
}
solutions(34)