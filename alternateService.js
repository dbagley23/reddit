var app = angular.module('reddit');

app.controller('FirebaseService', function($http, $q){
  this.getAllPosts = function() {
    var myPromise = $q(function(resolve, reject){
    	$http.get('http://devmtn.firebaseio.com/posts.json').then(function(response){
			resolve(response.data)
		}, reject)
		})
		return myPromise
  }
})