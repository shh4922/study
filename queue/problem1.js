class Node{
    constructor(data) {
        this.data = data
        this.next = null
        this.prev = null
    }
}

/**
 * 데이터가 추가되면 기존 마지막에있던애의 tail에는 새 노드가 붙고
 * 기존 헤더에있던 next에 새 노드가 붙음
 */
class Queue {
    constructor() {
        this.head = null    // Node
        this.tail = null    // Node
        this.size = 0
    }

    push(data) {
        const newNode = new Node(data)

        if(this.head === null) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode
            this.tail = newNode
            this.head.prev = newNode
        }
        this.size++
    }

    pop() {
        if(!this.head) {
            return null
        }

        const removeNode = this.head
        this.head = this.head.next

        if(!this.head) {
            this.tail = null
        }

        this.size--

        return removeNode.data
    }
}
/**
 * 문제 15)
 * 요세푸스 문제
 * N 명이 원형으로 앉아있고, 1번부터 시작하여 k번째 애를 죽임.
 * 죽인애 다음사람을 기준으로 또 k번째 죽임
 * 최종 생존자 리턴.
 *
 * 이중연결리스트 써야할거같은데, 그냥 배열 반복문으로 풀라고 준 문제는 아닌거같고.
 */

function solutions(n,k) {
    const queue = new Queue()

    for(let i=1; i<=n; i++) {
        const node = new Node(i)
        queue.push(node)
    }

    while (true) {
        if(queue.size === 1){
            break
        }

        for(let i=0; i<k; i++) {
            queue.push(queue.pop())
        }
        queue.pop()
    }

    return queue.pop()
}






