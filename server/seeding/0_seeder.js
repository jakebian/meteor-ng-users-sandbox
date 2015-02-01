dbSeeder = {
    seed: seed,
    seedIfEmpty: seedIfEmpty,
    randomEntryIdGenerator: randomEntryIdGenerator,
    randomEntryGenerator: randomEntryGenerator,
    randomCustomEntryGenerator: randomCustomEntryGenerator
};

faker = Meteor.npmRequire('faker');

function seed(Collection, generateEntry, count){
    _.range(0,count).forEach(function () {
        Collection.insert(generateEntry());
    });
}

function seedIfEmpty(Collection, generateEntry, count) {
    if (!Collection.findOne()) {
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

function randomEntryGenerator(Collection) {
    var pool = Collection.find().fetch().map(function(entry){
        return entry;
    }).concat([null]);

    return function () {
        return _.sample(pool);
    }
}

function randomCustomEntryGenerator(Collection, formatter) {
    var pool = Collection.find().fetch().map(formatter).concat([null]);
    return function () {
        return _.sample(pool);
    }
}