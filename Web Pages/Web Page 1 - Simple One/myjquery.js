function change(){
    $('#title').html('Welcome To My Mind!');

    // Made a unique function called "click", which changes the text back to it's original state.
    $("#title").click(function () {
        $("#title").html("Themes For Something Useful (Maybe)");
        $("#title").off("click");
    });
}

function sayHey(){
    alert("Hey There, Seij.");
}