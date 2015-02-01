function randomInterests() {
    return _.range(_.random(2, 10)).map(faker.hacker.noun);
}

function getUserEntry() {
    return {
        username: faker.internet.userName(),
        name: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        avatar: faker.internet.avatar(),
        tagline: faker.hacker.phrase(),
        interests: randomInterests()
    }
}

function seedUsersIfEmpty(count, getUserEntry, callback) {
    if (!Meteor.users.findOne()) {
        _.range(count).forEach(function () { 
            Accounts.createUser(getUserEntry());
        });

        callback();
    }
}

function seedUsersFriends(min, max) {
    var getRandomUser = dbSeeder.randomEntryGenerator(Meteor.users); 

    Meteor.users.find().forEach(function (user) {
        Meteor.users.update(
            user._id,
            {
                $set: {friends:  _.range(_.random(min, max)).map(getRandomUser)}
            }
        );
    });
}

seedUsersIfEmpty(30, getUserEntry, function () {
    seedUsersFriends(5, 40)
});

