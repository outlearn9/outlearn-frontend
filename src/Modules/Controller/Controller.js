export async function ApiCall(url, payload) {
    const baseUrl = 'http://44.195.205.114:8080';
    try {
        let res = await fetch(baseUrl + url, payload);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
