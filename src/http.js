export class Http {
    static HEADERS = {"Content-Type": "application/json"};


    static async get(url) {
        try {
            return await Http.request(url, "GET");
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static async post(url, data = {}) {
        try {
            return await Http.request(url, "POST", data);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static async delete(url) {
        try {
            return await Http.request(url, "DELETE");
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static async patch(url, data = {}) {
        try {
            return await Http.request(url, "PATCH", data);
        } catch (err) {
            console.error(err);
            throw err;
        }
    }

    static async request(url, method = "GET", data) {
        const config = {
            method,
            headers: Http.HEADERS
        };

        if (method === "POST" || method === "PATCH") {
            config.body = JSON.stringify(data);
        }
        const response = await fetch(url, config);
        if (response.status === 401)
            throw new Error("Permission denied");
        return await response.json();
    };
}



