const api_root = "http://localhost:80/game";

export function GetState(){
    return fetch(api_root + "/");
}

export function GetMyCaptions(){
    myFetch(api_root + `/players`, {name: "Diego"})
    .then (x=> fetch(api_root + `/captions/${playerId}`));
}

export function FlipPicture(){
    return myFetch(api_root + "/picture", {})
            
}

function myFetch(url = ``, data = null) {
    let options = {
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, same-origin, *omit
    };
    if(data){
        options = {
            ...options, 
            method:  "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json; charset=utf-8",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            body: JSON.stringify(data), // body data type must match "Content-Type" header
        };
    }
      return fetch(url, options)
      .then(response =>{
        return response.json()

      }
        ); // parses response to JSON
  }