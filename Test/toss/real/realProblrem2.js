
/**
 * 성공시 ["next", result]
 * 실패시 [undefined, error] 를 리턴하는 함수를 만들어라
 * promise는 매개변수로 주어짐.
 *
 *
 * @param promise
 * @returns {Promise<(string|*)[]|*[]>}
 */


/**
 * 실패 원인
 * 진짜 왜 틀렸는지 잘 모르겠음
 * 일단 solution에 async가 안붙어있었음
 *
 * 그래서 then 써서 했음 근데 틀렸음
 * 아직까지 이유를 모르겠음
 */



function solution(promise) {
    promise.then((res)=>{
        return ["next", result];
    }).catch((e)=> {
        const error = new Error(e)
        return [undefined, error];
    })
}