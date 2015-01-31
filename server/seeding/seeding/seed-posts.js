var getRandomMediaId = dbSeeder.randomEntryIdGenerator(Media);
var getRandomUserId = dbSeeder.randomEntryIdGenerator(Meteor.users);

function getPostEntry(){
    return {
        author: getRandomUserId(),
        text: faker.hacker.phrase(),
        timestamp: new Date(),
        media: getRandomMediaId()
    }
}

dbSeeder.seedIfEmpty(Posts, getPostEntry, 10);
