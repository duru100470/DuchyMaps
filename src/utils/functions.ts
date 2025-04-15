const baseLink = `http://${document.location.hostname}:8080`;

function fetchGet(url: string) {
    return fetch(baseLink + url, {
        method: "GET",
        mode: "cors",
        credentials: "include"
    });
}

function fetchPost(url: string, data: any) {
    console.log(`${url}\n${JSON.stringify(data)}`);
    return fetch(baseLink + url, {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include"
    });
}

function fetchPut(url: string, data: any) {
    console.log(`${url}\n${JSON.stringify(data)}`);
    return fetch(baseLink + url, {
        method: "PUT",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        credentials: "include"
    });
}

function fetchDelete(url: string) {
    return fetch(baseLink + url, {
        method: "DELETE",
        mode: "cors",
        credentials: "include"
    });
}

function Unix_timestamp(t: number) {
    var date = new Date(t * 1000);
    var year = date.getFullYear();
    var month = "0" + (date.getMonth() + 1);
    var day = "0" + date.getDate();
    var hour = "0" + date.getHours();
    var minute = "0" + date.getMinutes();
    var second = "0" + date.getSeconds();
    return (
        year +
        "-" +
        month.substr(-2) +
        "-" +
        day.substr(-2) +
        " " +
        hour.substr(-2) +
        ":" +
        minute.substr(-2) +
        ":" +
        second.substr(-2)
    );
}

export {
    fetchGet,
    fetchPost,
    fetchPut,
    fetchDelete,
    Unix_timestamp
}