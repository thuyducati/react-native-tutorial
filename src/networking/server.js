const apiGetData = "https://facebook.github.io/react-native/movies.json"
const apiInsertNewData = ""
const apiUpdateData = ""

async function getDataFromServer() {
    try {
        let response = await fetch(apiGetData)
        let responseJson = await response.json()

        return responseJson.movies
    } catch (error) {
        console.error(error)
    }
}

async function insertNewDataToServer(params) {
    try {
        let response = await fetch(apiInsertNewData, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
        let responseJson = await response.json()

        return responseJson.result
    } catch (error) {
        console.error(error)
    }
}

async function updateData(params) {
    try {
        let response = await fetch(apiUpdateData, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(params)
        })
    } catch (error) {
        console.error(error)
    }
}

export { getDataFromServer }
export { insertNewDataToServer }
export { updateData }