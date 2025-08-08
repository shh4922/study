let api  = null
let lastToken = null
let isFirst  = true

async function solution(callAPI) {

    const run = async () => {
        const res = isFirst ? await apiCall() : await apiCall(lastToken)
        isFirst = true
        lastToken = res.token
        return res.result
    }

    if(!api) {
        api = run()
    } else {
        api = api.then(run())
    }

    return api
}

function apiCall() {

}