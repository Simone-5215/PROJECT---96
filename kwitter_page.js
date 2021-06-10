//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAHV1ySF4RUuuZ9HDHtnOkL2U9GcaNxTbw",
      authDomain: "kwitter-bc521.firebaseapp.com",
      databaseURL: "https://kwitter-bc521-default-rtdb.firebaseio.com",
      projectId: "kwitter-bc521",
      storageBucket: "kwitter-bc521.appspot.com",
      messagingSenderId: "13391314855",
      appId: "1:13391314855:web:76a02d13f413a247290082",
      measurementId: "G-RX6K6Y2K7J"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function sent()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name :user_name ,
            message :msg ,
            like :0 
      });
      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
