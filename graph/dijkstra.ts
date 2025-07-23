type Edge = [number, number];      // [targetVertex, weight]
type AdjList = Edge[];             // 각 정점의 인접 간선 리스트

/**
 * 선형 탐색을 이용한 다읻스트라 알고리즘 구현
 */
function dijkstra(N:number, adjList:AdjList[], start:number) {

    const dist = Array(N).fill(Infinity)    // 최단거리를 저장하는곳
    const visited = Array(N).fill(false)    // 방문여부를 체크해두는 곳

    dist[start] = 0 // 시작위치. 자기자신까지의 거리는 0임.

    // 정점의 수만큼 반복.
    for(let i=0; i<N; i++) {
        let u = -1 // 선택된 정점의 인덱스번호 -1로 초기화
        let minDist = Infinity

        // 방문안한 애중, dist가 가장 적음 정점을 찾음.
        for(let j=0; j<N; j++) {
            // 초기에는 시작점 빼고 모두다 Infinity기에 시작점만 조건에 부합함
            if(!visited[j] && dist[j] < minDist) {
                minDist = dist[j]   // 현재노드까지의 최단거지
                u = j               // 현재 노드의 인덱스번호
            }
        }

        if(u === -1) break  // 모두 방문했다면, 멈춤
        visited[u] = true

        // 2) 확정된 u를 경유해 이웃 정점들의 거리를 완화(relax)
        for (const [v, w] of adjList[u]) {
            // v: u와 연결된 정점, w: u→v 간선 가중치

            // 방문안했고,
            // 기존에저장된 최소값 > (지금 내 노드까지 거리 + 내 위치부터방문할 노드까지의 거리)
            if (!visited[v] && dist[v] > dist[u] + w) {
                dist[v] = dist[u] + w;
            }
        }
    }
    return dist
}

const N: number = 5;
const adjList: AdjList[] = [
    [ [1, 2], [2, 5] ],  // 0번: 0→1(2), 0→2(5)
    [ [2, 1], [3, 3] ],  // 1번: 1→2(1), 1→3(3)
    [ [3, 2] ],          // 2번: 2→3(2)
    [ [4, 1] ],          // 3번: 3→4(1)
    []                   // 4번: 인접 간선 없음
];
const start: number = 0;               // 출발 정점
const distances: number[] = dijkstra(N, adjList, start);

console.log(distances);  // [0, 2, 3, 5, 6]