/**
 * 성공시 ["next", result]
 * 실패시 [undefined, error] 를 리턴하는 함수를 만들어라
 * promise는 매개변수로 주어짐.
 *
 *
 * @param promise
 * @returns {Promise<(string|*)[]|*[]>}
 */

// 내가 적은 풀이는 이랬는데 왜 틀린건지 모르겠다...
async function solution(promise) {
    try {
        const result = await promise;
        return ["next", result];
    } catch (error) {
        return [undefined, error];
    }
}