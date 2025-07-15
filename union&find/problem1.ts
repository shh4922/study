/**
 * 유니온 파인드 알고리즘 구현하기
 */

const find = (parent:number[], parentValue:number) => {
    if(parent[parentValue] === parentValue) {
        return parentValue
    }
    return find(parent, parent[parentValue])
}

const union = (parent:number[], x:number, y:number)=> {
    const root1 = find(parent,x)
    const root2 = find(parent,y)

    // [-1,1,2,....] -> [-1,1,1,....]
    parent[root2] = root1
}