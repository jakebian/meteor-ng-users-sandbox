var getRandomMedia= dbSeeder.randomEntryGenerator(Media);

function getUserData (user) {
    return {
        name: user.name,
        avatar: user.avatar,
        tagline: user.tagline
    }
}

var getRandomUser = dbSeeder.randomCustomEntryGenerator(Meteor.users, getUserData);

function getPostEntry(){
    return {
        author: getRandomUser(),
        text: faker.hacker.phrase(),
        timestamp: new Date(),
        media: getRandomMedia()
    }
}

dbSeeder.seedIfEmpty(Posts, getPostEntry, 30);
