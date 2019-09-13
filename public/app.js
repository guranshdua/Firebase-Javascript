//Function to Sign in using Google
function googleLogin()
{
  console.log("Inside Google Login")
  const provider=new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider)
  .then(result => {
    const user=result.user;
  })
  .catch(console.log)
}

//Function to Sign out
function signOut()
{
  console.log("Inside Sign Out")
  firebase.auth().signOut().then(function(){
    console.log("Signed Out");
  }).catch(function(error){

  })
}

//Function to Send Passwort Reset Link
function passwordReset()
{
  console.log("Inside Password Reset")
  var mail=document.getElementById("mailreset").value;
  firebase.auth().sendPasswordResetEmail(mail).then(function(){
    document.write("Password Reset Link has been sent to your Email.")
  })
}
