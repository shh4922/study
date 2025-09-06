const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

const input = fs.readFileSync(filePath, 'utf-8')
    .split("\n")
    .map((row)=>{
        return row.split(" ").map(Number)
    })



const board = input


function solution() {
    const size = board.length
    bt()
    console.log(board.map(c => c.join(" ")).join("\n").trim())

    function bt() {

        for(let c=0; c<size; c++) {             // 세로
            for(let r=0; r<size; r++) {         // 가로
                if(board[c][r] === 0) {                           /** 1번 조건 */
                    for (let k = 1; k <= size; k++) {    // 값
                        if (isValidate(c, r, k)) {
                            board[c][r] = k                     // 값넣음
                            if (bt()) {                          // 다음 bt실행. 짜피 이중포문이어도 1번조건에서 다 걸러짐
                                return true
                            } else {                            // 다음값넣고 다 돌았는데 false면 이전값이 잘못된거라 초기화함
                                board[c][r] = 0
                            }
                        }
                    }
                    return false
                }
            }
        }
        return true
    }

    function isValidate(col, row, value) {
        // 가로 체크
        if(board[col].includes(value)) return false

        // 세로 체크
        if(board.some((c) => c[row] === value)) {
            return false
        }


        // 3*3 체크
        const c = Math.floor(col/3) // 0~2= 0 , 3~5 = 1, 6~8=2
        const r = Math.floor(row/3)
        for(let i=c*3; i<c*3+3; i++) {
            for(let j=r*3; j<r*3+3; j++) {
                if(board[i][j] === value) return false
            }
        }

        return true
    }

}
solution()
// console.log(output.join("\n"))