require('dotenv').config()
const axios = require('axios')

const { API_KEY, USER_NAME } = process.env

exports.handler = async function (event) {
    const { id, pw } = JSON.parse(event.body)
    const { data } = await axios({
        url: 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login',
        method: 'POST',
        headers: {
            "content-type": "application/json",
            "apikey": API_KEY,
            "username": USER_NAME
        },
        data: {
            email: id,
            password: pw
        }
    })
    return {
        statusCode: 200,
        body: JSON.stringify(data)
    }
}