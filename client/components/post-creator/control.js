angular.module('post-creator.control', ['meteor-service'])
.controller('postCreatorCtrl', 
            ['$scope','MeteorService', 
    function ($scope , MeteorService) {
        $scope.model = {
            author: MeteorService.getCurrentUserId()
        };
        $scope.submitPost = function () {
            $scope.model.timestamp = new Date();
            MeteorService.newPost($scope.model);
        }
    }
]);