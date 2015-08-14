function getPeopleID(data){
        var arrayData = JSON.parse(data);
        console.log("Actor ID:" + arrayData["results"]["0"]["id"]);
        peopleID.push(arrayData["results"]["0"]["id"]);
}

function getKeywordID(data){
        var arrayData = JSON.parse(data);
        console.log("Keyword ID:" + arrayData["results"]["0"]["id"]);
        keywordsID.push(arrayData["results"]["0"]["id"]);
}

function successCB(data) {
        console.log("Successful callback: " + data);
        console.log(typeof data)
        var jsdata = JSON.parse(data);
        console.log(typeof jsdata);
}

function errorCB(data) {
            console.log("Error callback: " + data);
}
