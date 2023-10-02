export default function getConfig() {

    const urlApi = process.env.API_URL || "https://some-api"

    return urlApi
} 