/**
 * 무슨 파일을 다운받는데 한번에 3개씩밖에 처리를 못한데,
 * 중간에 문제가 생기면 정지된 상태를 유지하고 다시 실행할때
 * 실패한  애부터 다시 실행하게 하는 함수를 만드는거였음
 *
 * 이건 진짜 한번도 만들어본적도 없어서 어케 만들어야할까 감도 안왔음
 *
 *
 */

async function downloadFile(file) {
    // 파일 다운로드 시뮬레이션
    console.log(`다운로드 시작: ${file}`);
    await new Promise((res, rej) => {
        setTimeout(() => {
            if (Math.random() < 0.2) { // 20% 확률로 실패
                rej(new Error(`다운로드 실패: ${file}`));
            } else {
                res(`완료: ${file}`);
            }
        }, 500);
    });
}

async function processFiles(files, startIndex = 0, limit = 3) {
    let index = startIndex;

    while (index < files.length) {
        const chunk = files.slice(index, index + limit);
        console.log(`\n[${index}~${index + chunk.length - 1}] 처리 시작`);

        try {
            await Promise.all(chunk.map(downloadFile));
            index += limit; // 성공하면 다음 세트로
        } catch (err) {
            console.error(err.message);
            console.log(`중단 위치 저장: ${index}`);
            return index; // 실패한 인덱스 반환 → 다음 실행 시 여기서 시작
        }
    }

    console.log("\n모든 다운로드 완료");
    return null;
}

// 테스트 실행
(async () => {
    const files = Array.from({ length: 10 }, (_, i) => `file_${i + 1}`);
    let restartIndex = await processFiles(files, 0);

    if (restartIndex !== null) {
        console.log("\n=== 재시작 ===");
        await processFiles(files, restartIndex);
    }
})();