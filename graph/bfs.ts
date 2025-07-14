/**
 * DFS : 넓이 우선 탐색
 * 그냥 갈림길 나올때마다 걔들다 queue에 넣고
 * queue 빌동안 곗속 queue에서 꺼내서 꺼낸애의 하위에 또 갈곳있는지 확인하면서 탐색.
 * 그러다보니 자연스래 원하는 조건에 도달하는 최소한의 경로를 찾을수있음.
 */

const graph = {
    A: ["B", "C"],
    B: ["A", "D"],
    C: ["A", "G", "H", "I"],
    D: ["B", "E", "F"],
    E: ["D"],
    F: ["D"],
    G: ["C"],
    H: ["C"],
    I: ["C", "J"],
    J: ["I"]
};


const dfs = (gragh, startNode) => {
    const visited = []
    let queue = []
    queue.push(startNode)

    while (queue.length !== 0) {

        const node = queue.shift() // poll || dequeue

        // 방문안했던곳이면 방문했다고 넣어두고, 기존 큐에서 찾은 노드의 하위애들도 queue에 넣어둠.
        if(!visited.includes(node)) {
            visited.push(node)
            queue = [...queue, ...gragh[node]]
        }
    }
    console.log(visited)
}

dfs(graph,'A')