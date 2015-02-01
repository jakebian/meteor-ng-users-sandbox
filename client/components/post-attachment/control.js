angular.module('post-attachment.control', [])

.controller('postAttachmentCtrl',
            ['$scope',
     function($scope){
        $scope.templateUrl = getTemplateUrl($scope.media.type);
     }
])

function getTemplateUrl(type) {
    return '/component-templates/media/types/'+type+'.tpl';
}