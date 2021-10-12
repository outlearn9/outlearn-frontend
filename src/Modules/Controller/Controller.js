export async function ApiCall(url, payload) {
    try {
        let res = await fetch(url, payload);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
