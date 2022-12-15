//xmlHttpRequest is the oldest way to make XMLHttpRequests

export const sendHttpRequest = (method, url, data) => {
    const promise = new Promise((resolve, reject) => {
        const xmlHttpRequest = new XMLHttpRequest() //integrated into JScript

        xmlHttpRequest.open(method, url) //prepares HTTPRequest to be send
        //takes 2 parameters, either "GET","POST" etc. as a method to get data from or send data to the API
        //both need to be in string format because http protocol is text-based

        xmlHttpRequest.responseType = "json"//stands for JavaScript Object Notation, data exchange format
        //can be empty = "string"
        //"ArrayBuffer" containing binary data
        //"Blob object" containing binary data, file-like, immutable, raw data
        //"document" as in HTML or XML HTML Document
        //"json" object created by parsing contents of recieved data as JSON
        //"text" text in a DOMString Object

        // if we are sending data a header gets added
        if (data) {
            xmlHttpRequest.setRequestHeader("Content-Type", "application/json") //tell the api we are sending json data
        }



        xmlHttpRequest.onload = () => { // onload is called once the data exchange is done
            if (xmlHttpRequest.status >= 400) { // 400 = bad request, invalid syntax
                // xmlHttpRequest.status codes:
                // 100-199 information responses
                // 200-299 successfull responses
                // 300-399 redirection responses
                // 400-499 client error responses
                // 500-599 server error responses

                reject(xmlHttpRequest.response)
            } else {
                resolve(xmlHttpRequest.response)
            }
        }

        xmlHttpRequest.onerror = () => { //onerror is called once the data exchange fails only due to a network error
            reject("There is something wrong with your connection!")
        }

        xmlHttpRequest.send(JSON.stringify(data))//converting input data into a JSON string
    })
    return promise
}

//GET Request
export const getData = async () => {
    try {
        let getResponse = await sendHttpRequest("GET", "https://reqres.in/api/unkown")
        console.log(getResponse);
    }
    catch (error) {
        console.log(error);
    }

};

//POST Request
export const sendData = async () => {
    try {
        let postResponse = await sendHttpRequest("POST", "https://reqres.in/api/register",
            {
                email: 'eve.holt@reqres.in',
                password: 'pistol'
            })
        console.log(postResponse);
    }
    catch (error) {
        console.log(error);
    }

};