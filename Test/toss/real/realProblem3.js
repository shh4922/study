/**
 * fields 에는 이름과 타입이 들어있고
 * inputFields 에는 다음과같이 들어있음
 *
 * 조건에 맞지않는 애를 배열에 담아서 리턴하는 함수를 만들어야함.
 * inputFields 에는 name이 같은게 여러개 들어갈 수 있음
 *
 * 가장 마지막 애를 넣도록 해야함(그런데 이게 처음엔 실패하고 마지막거가 성공하면 기존에 담긴배열에서 제외되는건지 모르겠음 기억이안남)
 * 난 일단 하나라도 실패면 다른 email이 성공이라도 실패라고 생각해서 set사용했음
 *
 * 근데 틀림 ㅋㅋㅋㅋ 시발..
 *
 *
 * @type {[{name: string, type: string},{name: string, type: string},{name: string, type: string}]}
 */

const fields = [
    { name: "email", type: "text" },
    { name: "age", type: "number" },
    { name: "name", type: "text" }
];

const inputFields = [
    { name: "email", value: "abcde", validation: { maxLength: 3 } },
    { name: "age", value: 25, validation: { min: 30 } },
    { name: "name", value: "hi", validation: { minLength: 3, maxLength: 10 } }
];

function validateFields(fields, inputFields) {
    const invalidNames = [];

    for (const field of fields) {
        const input = inputFields.find(f => f.name === field.name);
        if (!input) continue; // 값이 없으면 건너뛰기

        const { value, validation = {} } = input;

        if (field.type === "text") {
            if (validation.maxLength !== undefined && value.length > validation.maxLength) {
                invalidNames.push(field.name);
                continue; // 이미 틀렸으니 다음 필드로
            }
            if (validation.minLength !== undefined && value.length < validation.minLength) {
                invalidNames.push(field.name);
                continue;
            }
        }

        if (field.type === "number") {
            if (validation.max !== undefined && value > validation.max) {
                invalidNames.push(field.name);
                continue;
            }
            if (validation.min !== undefined && value < validation.min) {
                invalidNames.push(field.name);
                continue;
            }
        }
    }

    return invalidNames;
}

// 테스트
console.log(validateFields(fields, inputFields));
// ["email", "age", "name"]
