angular.module('post-attachment.control', ['meteor-service'])

.controller('postAttachmentCtrl',
            ['$scope','MeteorService',
     function($scope , MeteorService){
        $scope.templateUrl = getTemplateUrl('link');
        MeteorService.subscribeTo(['directory', 'Media'])
        .then(function () {
            $scope.media = MeteorService.getMediaById($scope.media);
            $scope.templateUrl = getTemplateUrl($scope.media.type);
        })
     }
])

function getTemplateUrl(type) {
    return '/component-templates/media/types/'+type+'.tpl';
}