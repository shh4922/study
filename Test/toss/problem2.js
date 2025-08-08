// 입력 예시
current = "23:50:00"
target = "00:10:00"

let diffTime = toSec(target) - toSec(current)
diffTime = (diffTime+(24*60*60))%(24*60*60)

console.log(toTime(diffTime))


function toSec(time) {
    const [h,m,s] = time.split(":").map(Number)
    return (h*3600 + m*60 + s)
}

function toTime(secTime) {
    const h = Math.floor(secTime/3600)
    const m = Math.floor((secTime%3600)/60)
    const s = secTime%60

    return `${format(h)}:${format(m)}:${format(s)}`
}

function format(time) {
    return String(time).padStart(2,'0')
}