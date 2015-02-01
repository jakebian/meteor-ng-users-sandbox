angular.module('post.control', [])

.controller('postCtrl', 
            ['$scope',
    function( $scope ){
        $scope.timeText = moment($scope.post.timestamp).fromNow();
    }
]);