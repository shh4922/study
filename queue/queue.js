/**
 * JS 로 queue 구현방식 세가지.
 *
 */

// 1번
function Queue1() {
    const queue = []
    queue.push(1)
    queue.push(2)
    queue.push(3)

    let firstItem = queue.shift(); // 앞에값 제거 1
    console.log(firstItem)

    queue.push(4)
    queue.push(5)
    firstItem = queue.shift() // 앞에값 제거 2

    console.log(firstItem) // 2
}

/**
 * 계속해서 front, rear가 증가는 하긴해도 선형 queue 처럼 동작하긴 함.
 */
class Queue2 {
    items = []
    front = 0 // pop 할때 증가
    rear = 0 // push 할때 증가

    push(item) {
        this.items.push(item)
        this.rear++
    }

    pop() {
        return this.items[this.front++] // front꺼 꺼내고, front 1 증가
    }

    isEmpty() {
        return this.rear === this.front
    }
}


/**
 * 연결리스트를 사용하여 Queue를 구현하는 방법
 */

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class Queue3 {
    constructor() {
        this.head = null    // 처음 요소
        this.tail = null    // 마지막 요소
        this.size = 0       // 큐 길이
    }

    push(data) {
        const newNode = new Node(data)
        if(!this.head) {
            this.head = newNode
            this.tail = newNode
        } else {
            this.tail.next = newNode // 기존에 데이터가있으면 기존에있던 마지막데이터의 다음꺼는 새로들어온 데이터를 가르키도록 함.
            this.tail = newNode     // 새로들어온 데이터는 제일 마지막 데이터가 되는거임.
        }

        this.size++                 // 사이즈는 증가하고
    }

    pop() {
        if(!this.head) {                // 데이터가 없으면 null임
            return null
        }
        const removeNode = this.head    // 삭제할 데이터(node) 를 뽑음.
        this.head = this.head.next      // 삭제후에 앞으로갈 데이터를 헤드로 바꿔줌.

        if(!this.head) {
            this.tail = null            // 헤드가없다-> 데이터가 한개였으면, tail은 null로 초기화함.
        }
        this.size--                     // 사이즈는 한개 줄어듬

        return removeNode.data          // 삭제한 데이터를 리턴
    }

    isEmpty() {
        return this.size === 0
    }
}












