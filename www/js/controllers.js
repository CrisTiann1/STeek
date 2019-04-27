var config = {
    apiKey: "AIzaSyAlulZGDOBsQrfchOI7AKkRfVgZ1a4Xhu4",
    authDomain: "boycris-b08e4.firebaseapp.com",
    databaseURL: "https://boycris-b08e4.firebaseio.com",
    projectId: "boycris-b08e4",
    storageBucket: "boycris-b08e4.appspot.com",
    messagingSenderId: "748287716227"
 };
 firebase.initializeApp(config);
  var storage = firebase.storage();

angular.module('starter.controllers', [])
.controller("loginRes",function($scope,$state,$timeout){

 firebase.auth().signOut().then(function() {
 // Sign-out successful.
}).catch(function(error) {
 // An error happened.
});

 $scope.usuario={}

$scope.ejecutar = function(x){

   $scope.usuario = x

   console.log($scope.usuario.name)
   console.log($scope.usuario.pass)

   firebase.auth().signInWithEmailAndPassword($scope.usuario.name, $scope.usuario.pass).then(function(x){
     console.log("correcto")
     $timeout(function(){
       $state.go("inicio")
     },1000)
    
   }).catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     var errorMessage = error.message;
     console.log(error.code)
     console.log(error.message)
   });

} 

})
.controller("inicioctrl",function($scope){
  console.log("Entra inicio");

 $scope.newj = ""
 $scope.cargar = ""

  function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object
     console.log(files[0].name);
     $scope.newj = files
     $scope.cargar = files[0].name;
     // Loop through the FileList and render image files as thumbnails.
     for (var i = 0, f; f = files[i]; i++) {

       // Only process image files.
       if (!f.type.match('image.*')) {
         continue;
       }

       var reader = new FileReader();

       // Closure to capture the file information.
       reader.onload = (function(theFile) {
         return function(e) {
           // Render thumbnail.
           var span = document.createElement('span');
           span.innerHTML = ['<img class="thumb" src="', e.target.result,
                             '" title="', escape(theFile.name), '"/>'].join('');
           document.getElementById('list').insertBefore(span, null);
         };
       })(f);

       // Read in the image file as a data URL.
       reader.readAsDataURL(f);
     }
   }

  $scope.img= function(){
    /*var storageRef = storage.ref();

    var file = files // use the Blob or File API
    ref.put(file).then(function(snapshot) {
      console.log('Uploaded a blob or file!');
    })*/
    console.log("imagen guardada")
  }
  document.getElementById('files').addEventListener('change', handleFileSelect, false);


})



.controller("regist",function($scope,$state,$timeout){


 firebase.auth().signOut().then(function() {
 // Sign-out successful.
}).catch(function(error) {
 // An error happened.
});


 $scope.user = {}

 $scope.fun = function(x){
   $scope.user = x 

   console.log($scope.user)
   firebase.auth().createUserWithEmailAndPassword($scope.reg.email, $scope.reg.password).then(function(Y){

   }).catch(function(error) {
     // Handle Errors here.
     var errorCode = error.code;
     console.log(errorCode)
     var errorMessage = error.message;
     console.log(errorMessage)
     $timeout(function(){
       $state.go("login")
     })
     // ...
   })


 }
});