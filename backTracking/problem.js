/**
 * 1 ~ N 까지의 수 들중, 합이 10이 되는 조합 구하기
 */

function solution(N) {
    const result = []
    bt(0,[],1,result,N)
    console.log(result)
}
function bt(sum, selectNumList, start, result,N) {
    if(sum === 10) {
        result.push(selectNumList)
        return
    }

    for(let i=start; i<=N; i++) {
        if(sum+i <= 10) {
            selectNumList.push(i)

            bt(sum+i, selectNumList,i+1, result, N)
            selectNumList.pop()
        }
    }

}

solution(5)