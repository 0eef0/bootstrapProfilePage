function about(){
    document.getElementById("mainDiv").innerHTML = '<div class="accordion" id="accordionExample">'+
    '                <div class="accordion-item">'+
    '                    <h2 class="accordion-header" id="headingOne">'+
    '                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">'+
    '                            Info'+
    '                        </button>'+
    '                    </h2>'+
    '                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">'+
    '                        <div class="accordion-body">'+
    '                            <ul style="list-style-type: none;">'+
    '                                <li>Birthday: March 19, 2004</li>'+
    '                                <li>Birthplace: Mesa, Arizona</li>'+
    '                                <li>Relationship Status: <strong>Very</strong> Taken</li>'+
    '                                <li>School: Mountain Ridge High School</li>'+
    '                            </ul>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="accordion-item">'+
    '                    <h2 class="accordion-header" id="headingTwo">'+
    '                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">'+
    '                            Interests'+
    '                        </button>'+
    '                    </h2>'+
    '                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">'+
    '                        <div class="accordion-body">'+
    '                            <ul style="list-style-type: none;">'+
    '                                <li>Coding</li>'+
    '                                <li>Video Games</li>'+
    '                                <li>Anime</li>'+
    '                                <li>Watching YouTube</li>'+
    '                                <li>Sleeping</li>'+
    '                            </ul>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="accordion-item">'+
    '                    <h2 class="accordion-header" id="headingThree">'+
    '                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">'+
    '                            Timeline'+
    '                        </button>'+
    '                    </h2>'+
    '                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">'+
    '                        <div class="accordion-body">'+
    '                            <ul style="list-style-type: none;">'+
    '                                <li>March 2004: Was born in Mesa, Arizona</li>'+
    '                                <li>August 2009: Started school</li>'+
    '                                <li>December 2011: Moved to California</li>'+
    '                                <li>June 2016: Moved back to Arizona</li>'+
    '                                <li>August 2016: Met Zach</li>'+
    '                                <li>August 2018: Started high school</li>'+
    '                                <li>December 2020: Started dating Sydney</li>'+
    '                                <li>February 2021: Third place at FBLA regionals</li>'+
    '                            </ul>'+
    '                        </div>'+
    '                    </div>'+
    '                </div>'+
    '            </div>';
    document.getElementById("about").innerHTML = "<strong>About Me</strong>";
    document.getElementById("friends").innerHTML = "Friends";
    document.getElementById("posts").innerHTML = "Posts";
}
function friends(){
    document.getElementById("mainDiv").innerHTML = '<div class="card border-primary" id="friends">'+
    '                    <img src="images/syd.jpg" class="card-img-top rounded-circle">'+
    '                    <div class="card-body">'+
    '                      <h5 class="card-title" id="friendName">Sydney Hughes<br><small class="text-muted">Syd</small></h5>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="card border-primary">'+
    '                  <img src="images/zach.JPEG" class="card-img-top rounded-circle" alt="...">'+
    '                  <div class="card-body">'+
    '                    <h5 class="card-title" id="friendName">Zach Bollig<br><small class="text-muted">Zach_1885</small></h5>'+
    '                  </div>'+
    '              </div>'+
    '                <div class="card border-primary">'+
    '                    <img src="images/otherethan.JPG" class="card-img-top rounded-circle" alt="...">'+
    '                    <div class="card-body">'+
    '                      <h5 class="card-title" id="friendName">Ethan Best<br><small class="text-muted">BestRx <span class="badge bg-dark">Imposter</span></small></h5>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="card border-primary">'+
    '                    <img src="images/frankie.jpg" class="card-img-top rounded-circle" alt="...">'+
    '                    <div class="card-body">'+
    '                      <h5 class="card-title" id="friendName">Frankie Perry<br><small class="text-muted">Fronkus123</small></h5>'+
    '                    </div>'+
    '                </div>'+
    '                <div class="card border-primary">'+
    '                  <img src="images/luca.jpg" class="card-img-top rounded-circle" alt="...">'+
    '                  <div class="card-body">'+
    '                    <h5 class="card-title" id="friendName">Luca Graves<br><small class="text-muted">LGraves</small></h5>'+
    '                  </div>'+
    '              </div>';
    document.getElementById("friends").innerHTML = "<strong>Friends</strong>";
    document.getElementById("about").innerHTML = "About Me";
    document.getElementById("posts").innerHTML = "Posts";
}
function posts(){
    document.getElementById("mainDiv").innerHTML = '<div id="posts">'+
    '        <div class="card" id="post">'+
    '            <div class="card-header">'+
    '                TheCap\'n'+
    '              </div>'+
    '            <img src="images/halloween.jpg" class="card-img-bottom" id="postImg" alt="...">'+
    '            <div class="card-body">'+
    '              <p class="card-text" id="postContent">WOOOOO! Fun halloween party guys! 10/10 would do again.</p>'+
    '            </div>'+
    '        </div>'+
    '        <div class="card" id="post">'+
    '            <div class="card-header">'+
    '                TheCap\'n'+
    '              </div>'+
    '            <img src="images/chocolate.jpg" class="card-img-bottom" id="postImg" alt="...">'+
    '            <div class="card-body">'+
    '              <p class="card-text" id="postContent">A gift from the neighbor for petsitting their cat. Definitely not complaining!</p>'+
    '            </div>'+
    '        </div>'+
    '        <div class="card" id="post">'+
    '            <div class="card-header">'+
    '                TheCap\'n'+
    '              </div>'+
    '            <img src="images/taint.JPG" class="card-img-bottom" id="postImg" alt="...">'+
    '            <div class="card-body">'+
    '              <p class="card-text" id="postContent">I thought this was funny, so you are obligated to laugh</p>'+
    '            </div>'+
    '        </div>'+
    '        <div class="card" id="post">'+
    '            <div class="card-header">'+
    '                TheCap\'n'+
    '              </div>'+
    '            <img src="images/date.JPG" class="card-img-bottom" id="postImg" alt="...">'+
    '            <div class="card-body">'+
    '              <p class="card-text" id="postContent">Spent some time with the GF today. Much fun.</p>'+
    '            </div>'+
    '        </div>'+
    '        <div class="card" id="post">'+
    '            <div class="card-header">'+
    '                TheCap\'n'+
    '              </div>'+
    '            <img src="images/gift.JPG" class="card-img-bottom" id="postImg" alt="...">'+
    '            <div class="card-body">'+
    '              <p class="card-text" id="postContent">YES!!!! Early birthday gift from Jo Koy! Still wish I could\'ve went to the show...</p>'+
    '            </div>'+
    '        </div>'+
    '        <div class="card" id="post">'+
    '            <div class="card-header">'+
    '                TheCap\'n'+
    '              </div>'+
    '            <img src="images/sugar.JPG" class="card-img-bottom" id="postImg" alt="...">'+
    '            <div class="card-body">'+
    '              <p class="card-text" id="postContent">So umm.... ha, this happened. Not my proudest moment.</p>'+
    '            </div>'+
    '        </div>';
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

console.log("My GF made me write the relationship status as it is on the page")