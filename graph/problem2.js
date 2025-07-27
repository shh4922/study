/**
 * BFS 를 구현해보자.
 * BFS 는 괜찮은데 DFS 가 어렵다
 */
class Queue {
    item= []

    push(data){
        this.item.push(data)
    }

    pop() {
        return this.item.shift()
    }

    isEmpty() {
        return this.item.length === 0
    }
}

function solution(list,start) {
    const q = new Queue()
    const visited = new Set()
    const result = []
    const gragh = new Map()
    list.forEach(([s,e])=> {
        if(!gragh.has(s)) {
            gragh.set(s,[])
        }
        gragh.set(s,[...gragh.get(s),e])
    })



    function dfs(start,visited, result) {
        while (!q.isEmpty()) {
            const a = q.pop()

            if(gragh.has(a)) {
                gragh.get(a).forEach((value) => {
                    if(!visited.has(value)) {
                        q.push(value)
                        visited.add(value)
                        result.push(value)
                    }
                })
            }
        }
        return result
    }

    // 첫 시작노드 추가하고 탐색 시작
    q.push(start)
    visited.add(start)
    result.push(start)
    console.log(dfs(start,visited,result))
}

// const list = [[1,2],[1,3],[2,4],[2,5],[3,6],[3,7],[4,8],[5,8],[6,9],[7,9]]
const list = [[0,1],[1,2],[2,3],[3,4],[4,5],[5,0]]
const start = 1
solution(list,start)