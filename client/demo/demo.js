angular.module('demo', 
    [
        'live-search',
        'users-viewer',
        
        'post',
        'post-attachment',

        'post-creator',

        'meteor-service',
        'meteor-collections'

    ])
.controller('demoCtrl', 
            ['$scope','MeteorService','MeteorCollections',
    function ($scope , MeteorService , MeteorCollections) {
        $scope.posts = MeteorCollections.Posts();
        $scope.users = MeteorCollections.Users();
    }]);