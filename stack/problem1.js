// 괄호 짝 맞추가

/**
 * 리스트 "((()()" 와 같은 괄호리스트가 주어지는데 '(' 는 ')'를 만나면 사라짐.
 * 리스트가 짝이 맞으면 true, 아니면 false
 * @param list
 * @returns {boolean}
 */
function solutions(list) {
    const stack = []

    list.forEach((value) => {
        if(value === '(') {
            stack.push('value')
        } else {
            stack.pop()
        }
    })
    return stack.length === 0
}