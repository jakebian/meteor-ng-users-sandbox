angular.module('meteor-collections', ['angular-meteor'])
.service('MeteorCollections', ['$meteorCollection', function ($meteorCollection) {
    return {
        Users: function () {
            return $meteorCollection(Meteor.users);
        },
        Posts: function () {
            return $meteorCollection(Posts);
        }
    }
}])
.service('RawMeteorCollections', ['$meteorCollection', function ($meteorCollection) {
    return {
        Users: function () {
            return Meteor.users;
        },
        Posts: function () {
            return Posts;
        }
    }
}]);