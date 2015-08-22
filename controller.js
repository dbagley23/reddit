var app = angular.module('reddit');
app.controller('PostsController', function($scope, FirebaseService){

  $scope.getPosts = function() {
    FirebaseService.getAllPosts().then(function(dataFromService) {
      $scope.posts = dataFromService;
    });
  }

  $scope.addPost = function(){
    debugger;
    FirebaseService.addPost($scope.newPost).then($scope.getPosts())
  }
  
  $scope.getPosts();

	
});

