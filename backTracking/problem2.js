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
    if(!isValidate(board[m], value)) {
        board[m][n] = value
        return;
    }


    // 세로확인
    for(let i=0; i<9; i++) {
        if(!isValidate2(board,i,n,value)){
            board[m][n] = value
            return;
        }
    }

    // 3*3 확인
    const M = Math.floor(m / 3) * 3
    const N = Math.floor(n / 3) * 3
    const subgrid = board.slice(M, M + 3).map(row => row.slice(N, N + 3))

    if(isValidate(subgrid[M], value)) {
        board[m][n] = value
        return;
    }

    const N2 = Math.floor(n / 3)
    for(let i=0; i<3; i++) {
        if(!isValidate2(board,i,N2,value)){
            board[m][n] = value
            return;
        }
    }

    bt(board,value+1,m,n)
}

function isValidate(list, value) {
    // console.log(list, value)
    return !list.includes(value)
}
function isValidate2(list, m, n, value) {
    return list[m][n] === value
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

// solution(sudokuBoard)


function bt2(board) {
    for(let i=0; i<9; i++) {
        for(let j=0; j<9; j++) {
            if(board[i][j] === 0) {
                for(let k=1; k<=9; k++) {
                    if(isPossible(board,i,j,k)) {
                        board[i][j] = k
                        if(bt2(board)) { // 다음값 수행했는데 ok면 True
                            return true
                        } else {        // 다음값이 false면 이전값이 잘못된거이. 이전값(지금함수 기준으로 내값) 을 0으로 바꿈
                            board[i][j] = 0
                        }
                    }
                }
                return false
            }
        }
    }
    return board
}


function isPossible(board, row, col, value) {

    // 가로열 검증
    if(board[row].includes(value)) {
        return false
    }

    // 세로 검증
    if(board.some((row) => row[col] === value)) {
        return false
    }

    // 3*3 검증
    const sRow = Math.floor(row/3)*3
    const sCol = Math.floor(col/3)*3
    for(let i=0; i<3; i++) {
        for(let j=0; j<3; j++) {
            if(board[i+sRow][j+sCol] === value) return false
        }
    }

    return true
}

function solution2(board) {
    bt2(board)
    console.log(board)
}

solution2(sudokuBoard)

// function solveSudoku(board) {
//     backtrack(board);
// }
//
// function backtrack(board) {
//     for (let row = 0; row < 9; row++) {
//         for (let col = 0; col < 9; col++) {
//             if (board[row][col] === 0) { // 빈 칸이면
//                 for (let value = 1; value <= 9; value++) {
//                     if (isValid(board, row, col, value)) {
//                         board[row][col] = value;
//                         console.log(`▶ 넣기: (${row},${col}) = ${value}`);
//
//                         if (backtrack(board)) return true;
//
//                         board[row][col] = 0; // 복구
//                         console.log(`↩ 복구: (${row},${col}) = 0`);
//                     }
//                 }
//                 return false; // 1~9 다 실패하면 이전 칸으로
//             }
//         }
//     }
//     return true; // 다 채우면 성공
// }
//
// function isValid(board, row, col, value) {
//     // 가로
//     for (let c = 0; c < 9; c++) if (board[row][c] === value) return false;
//     // 세로
//     for (let r = 0; r < 9; r++) if (board[r][col] === value) return false;
//     // 3x3
//     const sr = Math.floor(row / 3) * 3;
//     const sc = Math.floor(col / 3) * 3;
//     for (let r = 0; r < 3; r++)
//         for (let c = 0; c < 3; c++)
//             if (board[sr + r][sc + c] === value) return false;
//
//     return true;
// }
//
// // 테스트용 작은 예시 보드
// const sudokuBoard2 = [
//     [5, 3, 0, 0, 7, 0, 0, 0, 0],
//     [6, 0, 0, 1, 9, 5, 0, 0, 0],
//     [0, 9, 8, 0, 0, 0, 0, 6, 0],
//     [8, 0, 0, 0, 6, 0, 0, 0, 3],
//     [4, 0, 0, 8, 0, 3, 0, 0, 1],
//     [7, 0, 0, 0, 2, 0, 0, 0, 6],
//     [0, 6, 0, 0, 0, 0, 2, 8, 0],
//     [0, 0, 0, 4, 1, 9, 0, 0, 5],
//     [0, 0, 0, 0, 8, 0, 0, 7, 9]
// ];
//
// solveSudoku(sudokuBoard2);