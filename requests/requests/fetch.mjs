export const sendHttpRequest = async (method, url, data) => {
    let response = await fetch(url, {
        method: method,//determine the method used e.g. "GET","POST" etc.
        body: JSON.stringify(data),//converting javascript data to JSON data
        headers: data ? { "Content-Type": "application/json" } : {}//if data is available set header, else leave empty
    })
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
    }
    return response.json(); //transform Textstream to JSON data and returns a promise


}

export const getData = async () => {
    //fetch method has promises build in already
    try {
        let getResponse = await sendHttpRequest("GET", "https://reqres.in/api/unknown")
        console.log(getResponse);
    }
    //will send a GET Request to the URL
    catch (error) {
        console.log(error);
    }
}

export const sendData = async () => {
    try {
        let postResponse = await sendHttpRequest("POST", "https://reqres.in/api/register", {
            email: 'eve.holt@reqres.in',
            password: 'pistol'
        })
        console.log(postResponse);
    }
    catch (error) {
        console.log(error);
    }
};