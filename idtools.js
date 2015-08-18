
function getPeopleID(data){
        var arrayData = JSON.parse(data);
        console.log("Actor ID:" + arrayData["results"]["0"]["id"]);
        peopleID.push(arrayData["results"]["0"]["id"]);
}

function getKeywordID(data){
        var arrayData = JSON.parse(data);
        console.log("Keyword ID:" + arrayData["results"]["0"]["id"]);
        for(k in arrayData["results"]){
                keywordsID.push(arrayData["results"][k]["id"]);
        }
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

function isGenre(tag){
        var genres = {
                "action":28,
                 "adventure":12,
                 "animation":16,
                 "animated":16,
                 "cartoon":16,
                 "comedy":35,
                 "funny":35,
                 "humor":35,
                 "humorous":35,
                 "crime":80,
                 "police":80,
                 "documentary":99,
                 "nonfiction":99,
                 "non-fiction":99,
                 "non fiction":99,
                 "drama":18,
                 "family":10751,
                 "kids":10751,
                 "kid":10751,
                 "child":10751,
                 "children":10751,
                 "fantasy":14,
                 "foreign":10769,
                 "history":36,
                 "horror":27,
                 "scary":27,
                 "music":10402,
                 "mystery":9648,
                 "romance":10749,
                 "love":10749,
                 "science fiction":878,
                 "scifi":878,
                 "sci-fi":878,
                 "sci fi":878,
                 "tv":10770,
                 "thriller":53,
                 "war":10752,
                 "battle":10752,
                 "military":10752,
                 "western":37
        }

        return genres[tag];
}

function empty(arrayOfArrays){
        for(a in arrayOfArrays){
                arrayOfArrays[a] = arrayOfArrays[a].splice(0,arrayOfArrays[a].length);
        }
}

function getIDs(type){
        if(type == "people"){
                if(people != []){
                        for(p in people){
                                theMovieDb.search.getPerson({"query":escape(people[p])},getPeopleID, errorCB);
                        }
                }
        }
        else if(type == "keyword"){
                if(keywords != []){
                        for(k in keywords){
                                theMovieDb.search.getKeyword({"query":escape(keywords[k])},getKeywordID, errorCB);
                        }
                }
        }
        else if(type == "list"){

        }
}

function next(){
        if(page != 0){
                if(page < maxPage){
                        page++;
                        searchMovies();
                }
        }
}

function previous(){
        if(page > 1){
                page--;
                searchMovies();
        }
}

function searchMovies(){
        theMovieDb.discover.getMovies({"with_cast":peopleID.toString(),
                                                                                "with_keywords":keywordsID.toString().replace(/,/g, "|"),
                                                                                "with_genres":genresID.toString(),
                                                                                "page":page
                                                                                }, discoverMovies, errorCB);
}
