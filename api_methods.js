var objForm = {
    email: "",
    names: "",
    country: "",
    comment: ""
};

var formJSON;

function addComment() {
    var emailElmnt = document.getElementById("email");
    var nameElmnt = document.getElementById("name");
    var countryElmnt = document.getElementById("country");
    var commentElmnt = document.getElementById("comment");

    objForm.email = emailElmnt.value;
    objForm.names = nameElmnt.value;
    objForm.country=countryElmnt.value;
    objForm.comment = commentElmnt.value

    console.log("INFORMATION:");
    console.log(objForm);

    formJSON = JSON.stringify(objForm);
    console.log(formJSON);

    var jsonElement = document.getElementById("myjson");
    jsonElement.innerHTML = "Comments and information sent succesfully!!!";
}

function getSpotifySong(){
    var results = document.getElementById("spotify-result");

    var keyword = document.getElementById("keyword");
    var token = document.getElementById("token");

    var request = new Request(
      `https://api.spotify.com/v1/search?q=${keyword.value}&type=track%2Cartist&market=US&limit=3&offset=1`,
      {
        method: 'GET',
        headers: new Headers({
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + token.value
        })
      }
    );

    fetch(request)
    .then(function(data){
      console.log('data');
      console.log(data);
      data.json()
      .then(function(myjson){
        console.log('results = ');
        console.log(myjson);

        document.getElementById("artist-1-name").innerHTML = myjson.artists.items[0].name;
        document.getElementById("artist-2-name").innerHTML = myjson.artists.items[1].name;
        document.getElementById("artist-3-name").innerHTML = myjson.artists.items[2].name;

        document.getElementById("track-1-name").innerHTML = myjson.tracks.items[0].name;
        document.getElementById("track-2-name").innerHTML = myjson.tracks.items[1].name;
        document.getElementById("track-3-name").innerHTML = myjson.tracks.items[2].name;

        document.getElementById("artist-1").src = myjson.artists.items[0].images[0].url;
        document.getElementById("artist-2").src = myjson.artists.items[1].images[0].url;
        document.getElementById("artist-3").src = myjson.artists.items[2].images[0].url;

        document.getElementById("track-1").src = myjson.tracks.items[0].album.images[0].url;
        document.getElementById("track-2").src = myjson.tracks.items[1].album.images[0].url;
        document.getElementById("track-3").src = myjson.tracks.items[2].album.images[0].url;
      });
    })
    .catch(err => {
      console.log(err);
    });

    results.style.display = "block";
}
