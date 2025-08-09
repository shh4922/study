/**
 * path 는 "test.key1.key2.key3..." 이렇게 주어짐
 * object 에서 해당 path에 있는 value를 바꿔주는거임.
 * 없으면 만들어서 넣으면됨
 *
 * @param obj
 * @param path
 * @param value
 */
function solution(obj, path, value) {
    const keys = path.split(".")

    let current = obj

    keys.forEach((key, index)=> {
        if(!(key in current) || typeof current[key] !== 'object') {
            current[key] = {}
        }
        current = current[key]
    })
    current[keys[keys.length-1]] = value
}