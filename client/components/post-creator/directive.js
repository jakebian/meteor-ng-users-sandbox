angular.module('post-creator.directive', [])
.directive('postCreator', [function () {
    return {
        scope: {},
        restrict: 'E',
        templateUrl: 'component-templates/post-creator.tpl',
        controller: 'postCreatorCtrl'
    }
}])