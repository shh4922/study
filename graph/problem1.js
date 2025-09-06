/**
 * 그래프가 주어질때 순회
 * 깊이우선 탑색 순회
 */

// const graph = [['A','B'], ['B','C'],['C','D'],['D','E']]
const graph = [['A','B'], ['A','C'],['B','D'],['B','E'],['C','F'],['E','F']]
const start = 'A'

function solution() {
    const visited = new Set()
    const result = []

    const tree = {}
    graph.forEach(([a,b]) => {
        if(!tree[a]) {
            tree[a]=[]
        }
        tree[a].push(b)
    })

    function dfs(node) {
        visited.add(node)
        result.push(node)

        if(tree[node]) {
           tree[node].forEach((value)=>{
               if(!visited[value]) {
                   dfs(value)
               }
           })
        }
    }
    dfs(start)
    return result
}
console.log(solution())



// function solution(graph, start) {
//     const result = []
//     const visited = new Set()
//
//     const adjList = {}
//     graph.forEach(([u,v])=>{
//         if(!adjList[u]) {
//             adjList[u]=[]
//         }
//         adjList[u].push(v)
//     })
//
//
//     function dfs(node,visited,result) {
//
//         visited.add(node)
//         result.push(node)
//         if(adjList[node] !== undefined) {
//             adjList[node].forEach((neighbor)=>{
//                 if(!visited.has(neighbor)) {
//                     dfs(neighbor, visited, result)
//                 }
//             })
//         }
//     }
//
//
//     dfs(start, visited, result)
//     return result
// }
// console.log(solution(graph,start))