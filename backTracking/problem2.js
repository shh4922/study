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
        if(board[i][n] === value){
            bt(board,value+1,m,n)
            return;
        }
    }

    // 3*3 확인
    const M = Math.floor(m / 3) * 3
    const N = Math.floor(n / 3) * 3
    const subgrid = board.slice(M, M + 3).map(row => row.slice(N, N + 3))
    // console.log(subgrid)
    for(let i=0; i<3; i++) {
        if(subgrid[i].includes(value)) {
            bt(board,value+1,m,n)
            return;
        }
        for(let j=0; j<3; j++) {
            if(subgrid[i][j] === value) {
                bt(board,value+1,m,n)
                return;
            }
        }
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