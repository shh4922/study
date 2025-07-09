/**
 * 트리순회
 * 이진트리를 표현하는 [1,2,3...n] 의 배열이 주어질때, 선위, 중위, 후위 순회해서 리턴하도록 만드셈.
 */

function solution(list:number[]) {
    return [front(list,0), middle(list,0), back(list, 0)]
}

function front(list:number[], index:number) {
    if(index < list.length) {
        let value = `${list[index]}`
        value += front(list, index*2+1)
        value += front(list, index*2+2)
        return value
    }
    return ""
}

function middle(list:number[], index:number) {
    if(index < list.length) {
        let value = middle(list, index*2+1)
        value += `${list[index]}`
        value += middle(list, index*2+2)
        return value
    }
    return ""
}

function back(list:number[], index:number) {
    if(index < list.length) {
        let value = back(list, index*2+1)
        value += back(list, index*2+2)
        value += `${list[index]}`
        return value
    }
    return ""
}
console.log(solution([1,2,3,4,5,6,7]))