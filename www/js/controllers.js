var config = {
   apiKey: "AIzaSyBwAI0_DRgawkK6ZoMSpmYAyhYiWZXt9u0",
   authDomain: "playtay-496de.firebaseapp.com",
   databaseURL: "https://playtay-496de.firebaseio.com",
   projectId: "playtay-496de",
   storageBucket: "playtay-496de.appspot.com",
   messagingSenderId: "842696532825"
 };
 firebase.initializeApp(config);

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
.controller("inicioS",function($scope){
 console.log("Entra inicio");
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
   });


 }
})