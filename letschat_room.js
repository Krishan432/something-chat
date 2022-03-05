
//ADD YOUR FIREBASE LINKS HERE
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
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
