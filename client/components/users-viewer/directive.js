angular.module('users-viewer.directive', [])

.directive('usersViewer', [
    function(){
        return {
            scope: {
                users: '='
            },
            templateUrl: 'component-templates/users-viewer/users-viewer.tpl',
            controller: 'usersViewerCtrl'
        }
    }
])
