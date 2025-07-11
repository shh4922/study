/**
 *  다양한 경우의 수의 트리 만드는 법을 익히기위해 연습겸 테스트코드 작성해봄.
 */

/** 트리 만드는 법 -------------------------------------------------------------------------------------------------- */
const makeTree1 = () => {
    class TreeNode {
        data:any
        children:any
        constructor(data:any) {
            this.data = data
            this.children = []
        }
    }

    const value = ["A", "B", "C", "D", "E", "F"]        // 데이터값임.
    const parents = [-1,0,0,1,1,2]                    // -1 인경우 Root, 나머지는 n번째의 하위 노드라는 뜻
    const nodes = new Array(value.length)                      // 데이터 개수만큼 노드 생성

    for(let i = 0; i<value.length; i++) {
        nodes[i] = new TreeNode(value[i])                       // 노드에 데이터 삽입
    }

    let root = null
    for(let i=0; i<value.length; i++) {
        const parent = parents[i]
        if(parent === -1) {
            root = nodes[i]
        } else {
            nodes[parent].children.push(nodes[i])
        }
    }
    console.log("트리생성 완료", root)

    preOrder1(root, (node)=>{console.log("탐색중",node)})
}

/** 트리 만드는 법 2 -------------------------------------------------------------------------------------------------- */
const makeTree2 = () => {
    class TreeNode {
        data:any
        children:any
        constructor(data:any) {
            this.data = data
            this.children = []
        }
    }

    const value = ["A", "B", "C", "D", "E", "F"]        // 데이터값임.
    const parents = ['-','A','A','B','C','E']           // - 인경우 Root, 나머지는 데이터의 하위 노드라는 뜻

    const map = new Map()                               // 노드들을 임시로 저장해둘 Map
    for(const name of value) {
        map.set(name, new TreeNode(name))               // 노드들 세팅
    }

    let root = null                                     // 루트
    for(let i=0; i<value.length; i++) {                 // 부모가 없으면 root에 대입, 있다면 해당부모를 map에서 찾은후 그 자식에 내 노드를 넣음. 이후 root를 출력하면 트리 만들기 성정
        const name = value[i]
        const parent = parents[i]
        const node = map.get(name)

        if(parent === '-') {
            root = node
        } else {
            const pNode = map.get(parent)
            pNode.children.push(node)
        }
    }

    console.log("트리 생성 완료", root)
    // preOrder1(root, (node)=>{console.log("전위 탐색중",node)})
    postOrder1(root, (node)=>{console.log("후위 탐색중",node)})
}

/**
 * 전위순회
 * 자기 자신은 탐색 하면서 하위로 내려감, 이진트리의 경우 왼쪽부터 내려감.
 */
const preOrder1 = (node, visit) => {
    if(!node) return
    visit(node);
    for(const child of node.children) {
        preOrder1(child, visit)
    }
}

/**
 * 후위순회
 * 자기 자식들을 탐색후 위로 올라감.
 * A -> B, C
 * B -> D, E
 * D -> E -> B -> C -> A
 */
const postOrder1 = (node, visit) => {
    if(!node) return
    for (const child of node.children) {
        postOrder1(child, visit)
    }
    visit(node)
}

makeTree2()