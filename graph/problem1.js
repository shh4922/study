/**
 * 그래프가 주어질때 순회
 * 깊이우선 탑색 순회
 */

const graph = [['A','B'], ['B','C'],['C','D'],['D','E']]
const start = 'A'

function solution(graph, start) {
    const result = []
    const visited = new Set()

    const adjList = {}
    graph.forEach(([u,v])=>{
        if(!adjList[u]) {
            adjList[u]=[]
        }
        adjList[u].push(v)
    })


    function dfs(node,visited,result) {

        visited.add(node)
        result.push(node)
        if(adjList[node] !== undefined) {
            adjList[node].forEach((neighbor)=>{
                if(!visited.has(neighbor)) {
                    dfs(neighbor, visited, result)
                }
            })
        }
    }


    dfs(start, visited, result)
    return result
}
console.log(solution(graph,start))