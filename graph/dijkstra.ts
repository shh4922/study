/**
 * 주어진 데이터 조건
 */
const N: number = 5;
const adjList: AdjList[] = [
    [ [1, 2], [2, 5] ],  // 0번: 0→1(2), 0→2(5)
    [ [2, 1], [3, 3] ],  // 1번: 1→2(1), 1→3(3)
    [ [3, 2] ],          // 2번: 2→3(2)
    [ [4, 1] ],          // 3번: 3→4(1)
    []                   // 4번: 인접 간선 없음
];
const start: number = 0;               // 출발 정점

/** -------------------------------------------------------------------------------- */

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


const distances: number[] = dijkstra(N, adjList, start);
console.log(distances);  // [0, 2, 3, 5, 6]

/** -------------------------------------------------------------------------------- */

/**
 * 힙을 이용한 다익스트라 알고리즘 구현
 * 일단 힙을 구현해야함. 힙에 들어가는 node는 아래와같이 구성되어있다고 가정
 */
interface node {
    num: number,
    dist:number
}
class heap {
    heap: node[] = []

    add(data) {
        this.heap.push(data)
        this.bubbleUp()
    }

    /**
     * 데이터가 추가될때마다, 자신의 부모루트 비용을 비교하여 정렬을 한다.
     * 하지만 최상단 루트 -> 비용이 0인 곳은 필요가없기에 index가 >0 경우에만 진행한다
     */
    bubbleUp() {
        let index = this.heap.length - 1
        let parentIndex =  Math.floor((index-1)/2)

        while (
            this.heap[parentIndex] &&
            this.heap[index] < this.heap[parentIndex]
            ) {
            this.swap(index,parentIndex)
            index = parentIndex
            parentIndex = Math.floor((index-1)/2)
        }
    }

    /**
     * 힙은 데이터 추출시, 루트노드를 삭제하고 가장 마지막노드를 루트로 올린다.
     * 그이후 다시 재정렬 한다.
     */
    poll() {
        if(this.heap.length === 1) {
            return this.heap.pop()
        }
        const value = this.heap[0]    // 루트에있는 최소값
        this.heap[0] = this.heap.pop()      // 가장 마지막에 있는 노드를 루트로 올림
        this.bubbleDown()                   // 재정렬

        return value                        // 팝한 노드 리턴 (비용이 최소였던)
    }

    bubbleDown() {
        let index = 0
        let leftIndex = index*2+1
        let rightIndex = index*2+2

        while (
            (this.heap[leftIndex] && this.heap[leftIndex].dist < this.heap[index].dist) ||
            (this.heap[rightIndex] && this.heap[rightIndex].dist < this.heap[index].dist)
            ) {
            let smallerIndex = leftIndex
            if(this.heap[rightIndex] && this.heap[rightIndex].dist < this.heap[leftIndex].dist) {
                smallerIndex = rightIndex
            }
            this.swap(index,smallerIndex)

            index = smallerIndex
            leftIndex = index*2+1
            rightIndex = index*2+2
        }
    }

    swap(index, parentIndex) {
        [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
    }
}

/**
 * 데이터는 이렇게 들어온다고 가정,
 * const adjList: Edge[][] = [
 *   [[1, 1], [2, 4]], // 0번 정점
 *   [[2, 2], [3, 5]], // 1번 정점
 *   [[3, 1]],         // 2번 정점
 *   []                // 3번 정점
 * ];
 * @param N
 * @param adjList
 * @param start
 */
function dijkstraPQ(N:number, adjList, start:number) {
    const dist = new Array(N).fill(Infinity)
    const visited = new Array(N).fill(false)
    const pq = new heap()

    dist[start] = 0 // 시작점은 비용이 0임
    pq.add({        // 시작지점의 index와 dist를 pq에 넣음
        num:start,
        dist:0
    })


    while (true) {
        const top = pq.poll()
        if(!top) break

        const nodeIndex = top.num   // 기존에 저장된 Index 노드
        const d = top.dist       // 기존에 저장된 index 까지의 비용

        // 이미 방문했거나, 기존에있던 더 작은비용 이면 건너뜀
        if(visited[nodeIndex] || d > dist[nodeIndex] ) continue

        visited[nodeIndex] = true

        // v -> 방문할 노드 번호
        // w -> 방문할 노드 까지의 비용
        for(const [v,w] of adjList[nodeIndex]) {
            // 방문했었던 노드인지 확인
            // 기존에 v까지 가는데 저장된 최소비용(dist[v]) 보다
            // 현재 내 위치로가는 비용(d) + v까지 가는 비용(w) 가 작은지 검증
            if(!visited[v] && dist[v] > d + w) {
                dist[v] = d+w
                pq.add({
                    num:v,
                    dist: dist[v]
                })
            }
        }
    }
    return dist
}
// const N2 = 4;
// const adjList2: Edge[][] = [
//     [[1, 1], [2, 4]], // 0번 정점
//     [[2, 2], [3, 5]], // 1번 정점
//     [[3, 1]],         // 2번 정점
//     []                // 3번 정점
// ];
// const start2 = 0;

const shortest = dijkstraPQ(N, adjList, start);
console.log('with heap',shortest);














