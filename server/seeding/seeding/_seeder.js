dbSeeder = {
    seed: seed,
    seedIfEmpty: seedIfEmpty,
    randomEntryIdGenerator: randomEntryIdGenerator
};

faker = Meteor.npmRequire('faker');

function seed(Collection, generateEntry, count){
    _.range(0,count).forEach(function () {
        Collection.insert(generateEntry());
    });
}

function seedIfEmpty(Collection, generateEntry, count) {
    if (Collection.find().count() === 0) {
        seed(Collection, generateEntry, count);
    }
}

function randomEntryIdGenerator(Collection) {
    var pool = Collection.find().fetch().map(function(entry){
        return entry._id;
    }).concat([null]);

    return function () {
        return _.sample(pool);
    }
}