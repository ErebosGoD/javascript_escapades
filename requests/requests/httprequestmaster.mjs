import { getData as getDataXmlHttpRequest, sendData as sendDataXmlHttpRequest } from "./xmlhttprequest.mjs";
import { getData as getDataFetch, sendData as sendDataFetch } from "./fetch.mjs";
import { getData as getDataAxios, sendData as sendDataAxios } from "./axios.mjs";

const getButton = document.getElementById('get-button');
const postButton = document.getElementById('post-button');

const AXIOS = "axios"
const FETCH = "fetch"
const XMLHTTPREQUEST = "xmlhttprequest"

let getData
let sendData

function sendHttpRequest(method) {
    if (method == XMLHTTPREQUEST) {
        getData = getDataXmlHttpRequest;
        sendData = sendDataXmlHttpRequest;
    } else if (method == FETCH) {
        getData = getDataFetch;
        sendData = sendDataFetch;
    } else if (method == AXIOS) {
        getData = getDataAxios;
        sendData = sendDataAxios
    }
}
sendHttpRequest(AXIOS)

getButton.addEventListener('click', getData);
postButton.addEventListener('click', sendData);