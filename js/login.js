$(document).ready(function (e) {
    var config = {
        apiKey: "AIzaSyDssAB8Wu3-0ItHFIUITCmUCFhhSbYEqv4",
        authDomain: "easycode-943a6.firebaseapp.com",
        databaseURL: "https://easycode-943a6.firebaseio.com/"
        };
    firebase.initializeApp(config);

    var database = firebase.database();

    function writeUserData(userId, name, email, imageUrl) {
        firebase.database().set({
          username: name,
          email: email,
          profile_picture : imageUrl
        });
    }
    writeUserData(23, "Roman", "rv", "None");
});