// 문자열 배열 조작
const logs = [
    "anna:안녕?",
    "bob:오늘 점심 뭐먹지?",
    "chris:안녕하세요",
    "bob:회의 몇시에 시작하나요?",
    "anna:네 알겠습니다"
];

const filterLogs = logs.filter((log)=> {
    return log.includes("?")
})
console.log(filterLogs)