// class minHeap {
//     heap=[]
//
//     add(data) {
//         this.heap.push(data)
//         this.bubbleUp()
//     }
//
//     bubbleUp() {
//         let index = this.heap.length-1                 // 마지막꺼
//         let parentIndex = Math.floor((index-1)/2)   // 걔의 부모
//
//         while(index > 0) {
//             if(this.heap[parentIndex] && this.heap[index].dist < this.heap[parentIndex].dist) {
//                 this.swap(index, parentIndex)
//                 index = parentIndex
//                 parentIndex = Math.floor((index-1)/2)
//             }
//         }
//     }
//
//     swap(index1, index2) {
//         [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
//     }
//
//     poll() {
//         // if(this.heap.length === 0) {
//         //     return null
//         // }
//         if(this.heap.length === 1) {
//             return this.heap.pop()
//         }
//
//         const returnValue = this.heap[0]
//         this.heap[0] = this.heap.pop()
//         this.bubbleDown()
//         return returnValue
//     }
//
//     bubbleDown() {
//         let index = 0
//         let leftIndex = index*2+1
//         let rightIndex = index*2+2
//
//         while (
//             (this.heap[leftIndex] && this.heap[leftIndex].dist < this.heap[index].dist)||
//             (this.heap[rightIndex] && this.heap[rightIndex].dist < this.heap[index].dist)
//             ) {
//             let smallerIndex = leftIndex
//
//             if(this.heap[rightIndex] && this.heap[rightIndex].dist < this.heap[leftIndex].dist) {
//                 smallerIndex = rightIndex
//             }
//
//             this.swap(index, smallerIndex)
//             index = smallerIndex
//             leftIndex = index*2+1
//             rightIndex = index*2+2
//         }
//     }
// }
//
//
// function solution(gragh,start) {
//
//
//     const visited = new Set()
//
//     const dist = new Map()
//     let visitedNodeList = {}
//     for(const key of Object.keys(gragh)) {
//         dist.set(key,Infinity)
//         visitedNodeList[key] = []
//     }
//
//     const pq = new minHeap()
//
//     dist.set(start,0)
//     pq.add({
//         node:start,
//         dist: 0,
//     })
//     visitedNodeList[start] = [start]
//
//
//
//     while (true) {
//         const top = pq.poll()
//         // console.info('top',top)
//         if(!top) break
//
//         const node = top.node
//         const cost = top.dist
//         const routes = top.route
//         // console.info("node,cost",node,cost)
//
//         if(visited.has(node) || cost > dist.get(node)) continue
//
//         visited.add(node)
//         // console.info("visited",visited)
//
//         for(const [key,value] of Object.entries(gragh[node])) {
//             if(!visited[key] && dist.get(key) > value+cost ) {
//                 dist.set(key,value+cost)
//                 pq.add({
//                     node:key,
//                     dist:dist.get(key),
//                 })
//
//                 visitedNodeList[key] = [ ...visitedNodeList[node], key]
//                 // console.log("visitedlist", visitedNodeList)
//             }
//         }
//
//     }
//
//     // for(const [key,value] of visitedNodeList) {
//     //     visitedNodeList.get(key).push(key)
//     // }
//
//     console.log(visitedNodeList,dist)
//
//
// }

const g = {
    "A":{"B":9, "C":3},
    "B":{"A":5},
    "C":{"B":1},
}
const start = 'A'
// const g = {
//     "A":{"B":1},
//     "B":{"C":5},
//     "C":{"D":1},
//     "D":{},
// }
// const start = 'A'
// solution(g,start)

class minHeap {
    heap=[]

    pust(item) {
        this.heap.push(item)
        this.bubbleUp()
    }
    pop() {
        if(this.heap.length === 1) {
            return this.heap.pop()
        }
        const returnValue = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.bubbleDown()
    }
    swap() {

    }
    bubbleUp() {
        let index = this.heap.length-1
        let parentIndex = Math.floor((index-1)/2)
        while (index > 0) {
            if(this.heap[parentIndex] && this.heap[index].dist <this.heap[parentIndex].dist) {
                this.swap(index,parentIndex)
                index = parentIndex
                parentIndex = Math.floor((index-1)/2)
            }
        }
    }
    bubbleDown() {
        let index = 0
        let leftIndex = index*2+1
        let rightIndex = index*2+2
        while (
            this.heap[leftIndex] && this.heap[leftIndex].dist < this.heap[index].dist ||
            this.heap[rightIndex] && this.heap[rightIndex].dist < this.heap[index].dist
            ) {
            let smallerIndex = leftIndex
            if(this.heap[rightIndex] && this.heap[rightIndex].dist < this.heap[leftIndex].dist) {
                smallerIndex = rightIndex
            }

            this.swap(index, smallerIndex)
            index = smallerIndex
            leftIndex = smallerIndex*2+1
            rightIndex = smallerIndex*2+2
        }
    }
}

function solution() {
    const visited = new Set()
    const dist = new Map()
    for(const key of Object.keys(g)) {
        dist.set(key,Infinity)
    }
    const pq = new minHeap()
    pq.pust({ node: start, dist:0})

    while (true) {
        const top = pq.pop()
        if(!top) break

        const node = top.node
        const cost = top.dist
        if(visited.has(node) || cost > dist.get(node)) continue

        visited.add(node)

        for(const [key, value] of Object.entries(g[node])) {
            if(!visited.has(key) && dist.get(key) > value+cost) {
                dist.set(key,value+cost)
                pq.pust({
                    node:key,
                    dist:value+cost
                })
            }
        }
    }

    console.log(dist)
}
solution()