/**
 * 두 개의 수로 특정 값 만들기
 */
function solution(array:number[], target:number) {
    const hash = {}
    array.forEach((value)=> {
        hash[value] = value
    })

    for(let i=0; i<array.length; i++) {
        const value = target-array[i]

        if(hash[value] !== undefined) {
            return 'True'
        }
    }

    return 'false'
}

console.log(solution([1,2,3,4,8],13))