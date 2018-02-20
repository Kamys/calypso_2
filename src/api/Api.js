class Api {
    /**
     * Key for save auth token in localStorage.
     * @type {string}
     */
    static keyAuthToken = "auth_token";

    static apiUrl = "http://likeme-server.net.ru/api/Tests/";

    static registration = (fullName, login, password) => {
        const data = {
            username: login,
            password: password,
            fio: fullName,
            ref_user_type: 1
        };

        let requestPromise = Api.executeRequest(data, "user/register");
        requestPromise.then(
            json => {
                let authToken = json.data['auth_token'];
                localStorage.setItem(Api.keyAuthToken, authToken);
            }
        ).catch((e) => {
            console.log("Error", e);
        });
        return requestPromise;
    };

    static getAuthToken = () => {
        return localStorage.getItem(Api.keyAuthToken);
    };

    static ping = () => {
        const data = {
            token: Api.getAuthToken(),
        };
        let requestPromise = Api.executeRequest(data, "user/ping");
        requestPromise.then(() =>{})
            .catch((e) => {
                console.error("Error", e);
            });
        return requestPromise;
    };

    static executeRequest(data, methodName) {
        return new Promise((resolve, reject) => {
            let url = Api.apiUrl + methodName;
            console.log("========= Request =========");
            console.log("Request url - ", url);
            console.log("Request data - ", data);
            fetch(url, {
                method: "POST",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json"
                },
                mode: 'cors'
            })
                .then((response) => response.json())
                .then((json) => handleResponse(json))
                .catch((e) => {
                    console.error("Failed executeRequest!", e);
                }).finally((json) => {
                console.log("Response data = ", json);
                console.log("==================");
                return json;
            });

            function handleResponse(json) {
                if (json.status) {
                    showMessages(json, 'green');
                    resolve(json);
                } else {
                    showMessages(json, 'red');
                    reject(json)
                }
            }

            function showMessages(json) {
                let messages = json.data.messages || [];
                messages.map((message) => {
                    console.log(message);
                });
            }
        });
    }
}

export default Api;