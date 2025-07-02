function solution(list:string[], queryList:string[]) {

    const hash = {}
    list.forEach((value) => {
        hash[value]=1
    })

    return queryList.map((str) => {
        return hash[str] === 1;

    })
}


solution(['apple', 'banana', 'cherry'], ['banana', 'kiwi', 'melon', 'apple'])