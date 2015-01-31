angular.module('post.control', ['meteor-service'])

.controller('postCtrl', 
            ['$scope','MeteorService',
    function( $scope , MeteorService){
        MeteorService.subscribeTo(['Users', 'Media'])
        .then(function(){
            $scope.post.author = MeteorService.getUserById($scope.post.author);
            $scope.post.timeText = moment($scope.post.timestamp).fromNow();
        })
    }
]);

