/**
 * 시발 다익스트라 알고리즘을 사용하려면 선형리스트말고 힙을 써야한다는데,
 * 힙 자료구조가 없음
 * 힙이 뭔지도모름 그래서 만들어봐야함.
 *
 * 힙에는 최소힙 과, 최대힙 이 있음.
 * 최소힙 은 부모노드가 자식노드 보다 작거나 같고,
 * 최대힙 은 부모노드가 자식노드 보다 크거나 같음.
 */

class Heap {
    private heap: number[]
    private isMaxHeap=false

    /**
     * 디폴트는 최소힙임. 최대힙 구할거면 스위칭 하셈
     * @param data
     */
    constructor(data:number[] = []) {
        this.heap = data
    }

    switchToMaxHeap() {
        this.heap = this.heap.map(v=> -v)
        this.isMaxHeap = true
    }

    /**
     * 값 추가시, 가장 마지막에 추가하고 그 애의 부모랑 비교하면서 정렬함.
     * @param value
     */
    add(value:number) {
        let v = value
        if(this.isMaxHeap) {
            v = -v
        }

        this.heap.push(v)
        this.bubbleUp()
    }

    /**
     * 힙에서 값 삭제시, 루트가 삭제되고 제일 마지막 값을 루트로 올림
     * 그리고 아래로 내리면서 다시 재정렬 함.
     */
    poll() {
        if(this.heap.length === 1) {
            return this.heap.pop()
        }
        const value = this.heap[0]  // 루트에 있는 값. (최소)
        this.heap[0] = this.heap.pop()      //  가장 마지막에 있는 값을 루트로 올림
        this.bubbleDown()                   // 위에서 아래로 정렬
        return value                        // 삭제한 애 리턴
    }

    private _swap(index1:number, index2:number) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]]
    }


    /**
     * 가장 마지막에 추가하고 위로 올리는 구조임
     */
    bubbleUp() {
        let index = this.heap.length-1 // 가장 마지막 에 추가된 값의 위치
        let parentIndex = Math.floor((index-1)/2) // 현재 추가된 애의 부모 인덱스 위치

        // 부모 값이 있고, 내값이 부모값보다 작으면
        while (
            this.heap[parentIndex] &&
            this.heap[index] < this.heap[parentIndex]
        ) {
            this._swap(index, parentIndex)          // 두 값 위치 바꾸고
            index = parentIndex                     // 값 바꿨으니까 내 인덱스 기존 부모 인덱스로 정의해두고
            parentIndex = Math.floor((index-1)/2)   // 새로바뀐 위치 기준으로의 부모 index 다시 정의해둠 그리고 다시 루프
        }
    }

    /**
     * 루트 원소 지우고, 가장 마지막 값이 올라가있는 상태
     * 루트에 새로 올라간 애를 다시 아래로 내리면서 정렬함
     */
    bubbleDown() {
        let index = 0
        let leftIndex = index*2+1   // 왼쪽 자식 index
        let rightIndex = index*2+2  // 오른쪽 자식 index

        while (
            (this.heap[leftIndex] && this.heap[leftIndex] < this.heap[index]) ||    // 왼쪽에 값이 있고, 왼쪽 값이 걔의 루트값(현재 나) 보다 작을떄 또는,
            (this.heap[rightIndex] && this.heap[rightIndex] < this.heap[index])     // 우측에 값이 있고, 우측 값이 걔의 루트값(현재 나) 보다 작을떄 또는,
        ) {
            let smallerIndex = leftIndex // 일단 왼쪽값이라고 가정해둠.
            if(this.heap[rightIndex] && this.heap[rightIndex] <this.heap[smallerIndex]) {
                smallerIndex = rightIndex       // 만약 우측에 값이있고 왼쪽값보다 작으면 가장작은 인덱스를 우측으로 다시 바꿈
            }
            this._swap(index,smallerIndex)      // 두 값 위치 바꿈
            index = smallerIndex                // 비교할 인덱스 위치 바꿈
            leftIndex = index*2 + 1             // 바꾼애 기준 왼쪽 재정의
            rightIndex = index*2 + 2            // 바꾼애 기준 우측 재정의
        }
    }
}