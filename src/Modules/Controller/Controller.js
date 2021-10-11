export async function ApiCall(url,payload){
    fetch(url,payload)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        return data.json();
    })
    .catch(function (err) {
        console.log("Something went wrong!", err);
    });
}
