angular.module('post-attachment.directive', [])

.directive('postAttachment', [
    function(){
        return {
            scope: {
                media: '='
            },
            restrict: 'E',
            templateUrl: 'component-templates/media/media.tpl',
            controller: 'postAttachmentCtrl'
        }
    }
])
