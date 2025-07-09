
function solution(list:number[], search:number[]) {
    class Node {
        data= null
        left:Node = null
        right:Node = null

        constructor(data) {
            this.data=data
        }
        push(value) {
            if(value > this.data) {
                this.right.push(value)
            } else {
                this.left.push(value)
            }
        }
    }

    const tree = new Node(list[0])

    for(let i=1; i<list.length; i++) {
        const node = new Node(list[i])
        push(node,tree)
    }



    const result = []
    search.forEach((value)=> {
        result.push(check(value, tree))
    })
    return result
}

function push(node:any, tree:any) {
    if(node.data > tree.data) {
        if(tree.right !== null) {
            push(node, tree.right)
        } else {
            tree.right = node
        }
    } else {
        if(tree.left !== null) {
            push(node, tree.left)
        } else {
            tree.left = node
        }
    }
}

function check(data:number, tree:any):boolean {
    if(data === tree.data) return true
    if(tree.data === null) return false
    if(data < tree.data && tree.left) {
        return check(data, tree.left)
    }
    if(data > tree.data && tree.right) {
        return check(data, tree.right)
    }
    return false
}

console.log(solution([1,3,5,7,9],[2,4,6,8,10]))