//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAsQUPrAzkNGVihUpUz83Lv0M2ejrLf_zQ",
      authDomain: "kwitter-858db.firebaseapp.com",
      databaseURL: "https://kwitter-858db-default-rtdb.firebaseio.com",
      projectId: "kwitter-858db",
      storageBucket: "kwitter-858db.appspot.com",
      messagingSenderId: "487818480330",
      appId: "1:487818480330:web:7cdb6dd82f7b235cb20233"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function send()
{
      msg = document.getElementById("message").value;
      firebase.database().ref(room_name).push({
 name:user_name,
 message:msg,
 like:0
      });

      document.getElementById("message").value= "";
}
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
