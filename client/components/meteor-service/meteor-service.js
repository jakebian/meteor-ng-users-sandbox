
var DUMMY_USER = {
    username: "steveJobs",
    email: "steve@apple.com"
}

angular.module('meteor-service', [
    'angular-meteor',
    'meteor-collections'
    ])

.factory('MeteorService', 
            ['RawMeteorCollections',
    function (RawMeteorCollections) {
        return {
            subscribeTo: subscribeTo,
            getUserById: getUserById,
            getMediaById: getMediaById,
            getCurrentUserId: getCurrentUserId,
            newPost: newPost,
            getUsers: getUsers
        }

        function getUserById(id) {
            return Meteor.users.findOne(id);
        }

        function getMediaById(id) {
            return Media.findOne(id);
        }

        function subscribeTo() {
            return {
                then: function (callback) {
                    Meteor.autosubscribe(function(){
                        callback();
                    });
                }
            }
        }
        function getCurrentUserId() {
            return "DUMMY"
        }
        function newPost() {

        }
        function getUsers() {

        }
    }
]);

