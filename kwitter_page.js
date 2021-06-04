//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyAq-qR37vx3cMwi8PMtrPkmkQjPAt_4Yf4",
      authDomain: "my-kwitter-app-9a92d.firebaseapp.com",
      projectId: "my-kwitter-app-9a92d",
      storageBucket: "my-kwitter-app-9a92d.appspot.com",
      messagingSenderId: "885855995923",
      appId: "1:885855995923:web:5fd3e3e45bf43e918bd7e6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
    function send(){
          msg=document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name:user_name,
                message:msg,
                like:0
          });
          document.getElementById("msg").value="";
    }
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
