function about(){
    document.getElementById("mainDiv").innerHTML = "about page";
    document.getElementById("about").innerHTML = "<strong>About Me</strong>";
    document.getElementById("friends").innerHTML = "Friends";
    document.getElementById("posts").innerHTML = "Posts";
}
function friends(){
    document.getElementById("mainDiv").innerHTML = "friends";
    document.getElementById("friends").innerHTML = "<strong>Friends</strong>";
    document.getElementById("about").innerHTML = "About Me";
    document.getElementById("posts").innerHTML = "Posts";
}
function posts(){
    document.getElementById("mainDiv").innerHTML = "posts";
    document.getElementById("posts").innerHTML = "<strong>Posts</strong>";
    document.getElementById("about").innerHTML = "About Me";
    document.getElementById("friends").innerHTML = "Friends";
}