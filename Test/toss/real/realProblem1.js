/**
 * path 는 "test.key1.key2.key3..." 이렇게 주어짐
 * object 에서 해당 path에 있는 value를 바꿔주는거임.
 * 없으면 만들어서 넣으면됨
 *
 * @param obj
 * @param path
 * @param value
 */


/**
 * 실패원인
 * 그냥 내가 멍청했음
 * 아 진짜.. 간단한 문제였는데 왜 못풀었을까..
 */

function solution(obj, path, value) {
    const keys = path.split(".")

    let current = obj

    // !(key in current) 아니 난 이런문법이 있는줄도 몰랐네
    keys.forEach((key, index)=> {
        if(!(key in current) || typeof current[key] !== 'object') {
            current[key] = {}
        }
        current = current[key]
    })
    current[keys[keys.length-1]] = value
}