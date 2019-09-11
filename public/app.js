function googleLogin()
{
  const provider=new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(result => {
    const user=result.user;
    console.log(user)
  })
  .catch(console.log)
}

function initApp()
{

  firebase.auth().onAuthStateChanged(function(user)
  {
    if(user)
    {
      console.log(user);
    }
    else {

    }

    if(user.emailVerified==false)
    {
        user.sendEmailVerification().then(function() {
        console.log("Email sent");
    }).catch(function(error) {
    // An error happened.
    });
    }
    else {
      console.log("User already Verified")
    }
  })

}

function signOut()
{
  firebase.auth().signOut().then(function(){
    console.log("Signed Out");
  }).catch(function(error){

  })
}

function passwordReset()
{
  var mail=document.getElementById("mailreset").value;
  firebase.auth().sendPasswordResetEmail(mail).then(function(){
    console.log("Email Sent");
  })
}
