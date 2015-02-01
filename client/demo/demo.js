angular.module('demo', 
    [
        'live-search',
        'users-viewer',
        
        'post',
        'post-attachment',

        'post-creator',

        'meteor-service',

        'angular-meteor'
    ])
.controller('demoCtrl', 
            ['$scope','$meteorSubscribe','$meteorCollection',
    function ($scope , $meteorSubscribe , $meteorCollection) {
        // $scope.posts = MeteorCollections.Posts();
        $meteorSubscribe.subscribe('users.all')
        .then(function () {
            $scope.users = $meteorCollection(Meteor.users);
        });

        $meteorSubscribe.subscribe('posts.all')
        .then(function () {
            $scope.posts = $meteorCollection(Posts);
            console.log($scope.posts);
        })
    }]);