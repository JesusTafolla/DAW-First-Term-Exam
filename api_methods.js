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