// 입력 예시
orders = [
    { id: 1, name: "Keyboard", quantity: 2 },
    { id: 2, name: "Mouse", quantity: 5 },
    { id: 1, name: "Keyboard", quantity: 3 },
    { id: 3, name: "Monitor", quantity: 1 }
]

const orderMap = new Map()

for(const {id,name,quantity} of orders) {
    const prev = orderMap.get(id)
    orderMap.set(id,
        prev ?
            {...prev, quantity: prev.quantity+quantity} :
            {id,name,quantity}
    )
}

const result = [...orderMap.values()]
    .sort((a,b)=>{
        a.quantity-b.quantity
    })
console.log(result)


// 출력 예시
// [
//   { id: 1, name: "Keyboard", quantity: 5 },
//   { id: 2, name: "Mouse", quantity: 5 },
//   { id: 3, name: "Monitor", quantity: 1 }
// ]