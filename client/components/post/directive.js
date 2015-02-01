angular.module('post.directive', [])

.directive('post', [
    function(){
        return {
            scope: {
                post: '='
            },
            restrict: 'E',
            templateUrl: 'component-templates/post/post.tpl',
            controller: 'postCtrl'
        }
    }
])
