function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
  
    document.getElementById("id").innerHTML = profile.getId();
    document.getElementById("Name").innerHTML = profile.getName();
    document.getElementById("myImg").src = profile.getImageUrl();;
    document.getElementById("Email").innerHTML = profile.getEmail();
  
    var googleTockenId = profile.getId();
    var name = profile.getName();
    var email = profile.getImageUrl();
    var profile = profile.getEmail();

    console.log(googleTockenId);
    console.log(name);
    sevedatalog(googleTockenId,name,email,profile);
  
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
  

  }

  function onFailure(error) {
    alert(error);
}

  function sevedatalog(googleTockenId,name,email,profile){
      
    $.post("script.php",{authProvider:"Google",googleTockenId:googleTockenId,name:name,email:email,profile:profile});
    // console.log("เข้ามาแล้ว");
    window.location.assign('/googlelogin/index.html');
  }
  
  function signOut() {
      var auth2 = gapi.auth2.getAuthInstance();
      auth2.signOut().then(function () {
        console.log('User signed out.');
        alert(" logout saccess");
      });
      auth2.disconnect();
    }
   
  
  