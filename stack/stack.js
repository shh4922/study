
// 굳이 js 에서 구현 안해도되는것같음
class Stack {
    stack = []
    maxSize = 10;

    isFull = () => {
        return this.stack.length === this.maxSize
    }

    isEmpty = () => {
        return this.stack.length === 0
    }

    // O(1)
    push = (data) => {
        if(this.isFull()) {
            console.log('stack이 가득참')
        } else {
            this.stack.push(data)
            console.log("추가완료")
        }
    }

    // O(1)
    pop = () => {
        if(this.isEmpty()) {
            console.log('빔')
        } else {
            return this.stack.pop()
        }
    }
}


