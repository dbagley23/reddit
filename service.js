var app = angular.module('reddit');

app.service('FirebaseService', function($http, $q){
  this.getAllPosts = function() {
    var deferred = $q.defer();
    $http.get('http://devmtn.firebaseio.com/posts.json')
    .then(function(response) {
      var parsedResponse = response.data
      deferred.resolve(parsedResponse)
    })
    return deferred.promise;
  }
  
  this.addPost = function(post){
    post.timestamp = Date.now();
    post.comments = [];
    post.karma = 0;
    post.id = guid();
    var url = 'https://devmtn.firebaseio.com/posts/' + post.id + '.json'
    return $http.put(url, post)
  }
 var guid = function() {
    var s4 = function() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }
	
});
