function solution(board) {
    for (let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            bt(board,1,i,j)
        }
    }
    console.log(board)
}

function bt(board, value, m, n) {
    if(board[m][n] !== 0) { return }

    // 가로 확인
    if(board[m].includes(value)) {
        bt(board,value+1,m,n)
        return;
    }

    // 세로확인
    for(let i=0; i<9; i++) {
        if(board[i].includes(value)){
            bt(board,value+1,m,n)
        }
    }

    // 3*3 확인
    const M = Math.floor(m/3)
    const N = Math.floor(N/3)
    for(let i=M*3; i<(M+1)*3; i++){
        if(board[M])
    }

    board[m][n] = value
}

const sudokuBoard = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],

    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],

    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9]
];

solution(sudokuBoard)