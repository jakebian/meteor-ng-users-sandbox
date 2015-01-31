angular.module('live-search.directive', [])

.directive('liveSearch', [
    function(){
        return {
            scope: {
                objects: "=",
                objectTemplateUrl: "@"
            },
            templateUrl: "component-templates/live-search.tpl",
            controller: "liveSearchCtrl"
        }
    }
]);