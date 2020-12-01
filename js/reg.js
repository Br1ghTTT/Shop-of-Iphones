
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDxcOHFlH0Mrr1WJw8mn5HX_JU8yclaNlY",
    authDomain: "smthnew-88827.firebaseapp.com",
    databaseURL: "https://smthnew-88827.firebaseio.com",
    projectId: "smthnew-88827",
    storageBucket: "smthnew-88827.appspot.com",
    messagingSenderId: "485187317731",
    appId: "1:485187317731:web:5b7eacad364e722dfbbad6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  function signUp(){
    var email = document.getElementById('email');
    var password = document.getElementById('pass');

    const Promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    Promise.catch(e => alert(e.message));
    alert("Signed Up");
  }

  function signIn(){
    var email = document.getElementById('email');
    var password = document.getElementById('pass');

    const Promise = auth.signInWithEmailAndPassword(email.value, password.value);
    Promise.catch(e => alert(e.message));
    alert("Signed In");
  }

  function signOut(){
      auth.signOut();
      alert('Signed Out')
  }

  auth.onAuthStateChanged(function(user){
    if(user){
        let email = user.email;
        alert("Active user " + email)
    }else{
        alert("No Active user")
    }
});



function toBuy(){
  auth.onAuthStateChanged(function(user){
  if(user){
    let input = prompt(`Please input your phone number to contact with you
    Number example: XXX-ХХ-ХХ-ХХХ `);
    let regExp = /^0[5-9][0-9]-\d{2}-\d{2}-\d{3}/;
    if(regExp.test(input)){
      alert(`Number is correct! 
We will call you in nearest 3 minutes to confirm your order`);
    }else{
      alert(`Something wrong with your number, please try again!`);
    }
    }else{
     alert("You can't buy anything if you don't registered")
    }
  });
}


function note(){
  auth.onAuthStateChanged(function(user){
  if(user){
    let aj = new XMLHttpRequest();
    but_i12.innerHTML = "Loading...";
    aj.open('GET', '/note', true);  
    aj.onreadystatechange = function() {  
      if (aj.readyState != 4)
      return;
      if (aj.status != 200) {  
        alert('Error ' + aj.status + ': ' + aj.statusText);
        return;
      } 
      if(aj.status == 200){
        document.getElementById('but_i12').innerHTML = aj.responseText;
      }
    }
    aj.send();
    }else{
    alert(`We can't notificate you until you don't registered`);
    }
  });
} 
