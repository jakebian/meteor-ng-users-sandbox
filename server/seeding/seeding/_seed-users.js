if(userSeeder.meteorUtil.isEmpty("users")) {
    var faker = Meteor.npmRequire('faker');
    var fakerMap = {
        username: faker.internet.userName,
        email: faker.internet.email,
        password: faker.internet.password
    }
    var userCount = 40; 
    userSeeder.seed(userCount, fakerMap);
    userSeeder.meteorUtil.logCollection("users");
}