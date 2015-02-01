angular.module('post-creator.control', [])
.controller('postCreatorCtrl', 
            ['$scope',
    function ($scope) {
        $scope.model = {
            author: MeteorService.getCurrentUserId()
        };
        $scope.submitPost = function () {
            $scope.model.timestamp = new Date();
        }
    }
]);