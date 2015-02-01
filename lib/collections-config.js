if (Meteor.isServer) {
    Accounts.onCreateUser(function (options, user) {
        user.name = options.name;
        user.avatar = options.avatar || 'http://www.gravatar.com/avatar/';
        user.interests = options.interests || [];
        user.tagline = options.tagline || '';
        return user;
    });
}