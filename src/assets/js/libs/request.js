import ReactDOM from 'react-dom';
import { fetch } from 'whatwg-fetch'; // 让ie支持fetch()请求接口
let oLoad = ReactDOM.findDOMNode(document.getElementById("page-load"));

function request(pUrl, pType = 'get'.toLocaleLowerCase(), data = {}) {
    showLoad();
    let config = {}, headers = {}, params = '';
    if (pType === "get".toLocaleLowerCase()) {
        config = {
            method: pType
        }
    } else {
        headers = {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
        if (data instanceof Object) {
            for (let key in data) {
                params += `&${key}=${encodeURIComponent(data[key])}`;
            }
            params = params.slice(1);
        }
        config = {
            method: pType,
            headers,
            body: params
        }
    }
    return fetch(pUrl, config).then(res => {
        hideLoad();
        return res.json();
    });
}

function showLoad() {
    oLoad.style.display = "block";
}

function hideLoad() {
    oLoad.style.display = "none";
}

export { request };