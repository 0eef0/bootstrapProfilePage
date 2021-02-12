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

var profile = true;
function toggleProfile(){
    if(profile){
        document.getElementById("profileBtn").innerHTML = '<img src="images/arrowDown.png" height="100%" width="100%">';
        profile = false;
    }else{
        document.getElementById("profileBtn").innerHTML = '<img src="images/arrowUp.png" height="100%" width="100%">';
        profile = true;
    }
}