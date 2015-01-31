var MEDIA_TYPES = [
    'link',
    'image',
    'youtube'
];

var urlPool = [
    'https://github.com/Marak/faker.js',
    'http://www.staff.science.uu.nl/~hooft101/',
    'http://www.theuselessweb.com/',
    'http://www.cgtp.duke.edu/ITP99/segal/',
    'http://mathoverflow.net/questions/71909/book-on-mathematical-rigorous-string-theory',
    'https://news.ycombinator.com/news',
    'http://arxiv.org/abs/1412.8478',
    'http://fuckinggodateformat.com/',
    'http://evolve.cutc.ca/',
    'http://underscorejs.org/#random'
]

var youtubePool = [
    'https://www.youtube.com/watch?v=zD-ayunXFoo',
    'https://www.youtube.com/watch?v=PIWVFUtBV1Q',
    'https://www.youtube.com/watch?v=POVpPUkhcTQ',
    'https://www.youtube.com/watch?v=o6L6XeNdd_k',
    'https://www.youtube.com/watch?v=ZMG3hS4udvs',
    'https://www.youtube.com/watch?v=v3ivpV5OSUs',
    'https://www.youtube.com/watch?v=OH3rC65wuDg',
    'https://www.youtube.com/watch?v=ZMUqQtmMRSQ',
    'https://www.youtube.com/watch?v=Du5NjA3QW_E',
    'https://www.youtube.com/watch?v=1MG3gVcn5jE'
]

function randomUrl() {
    return _.sample(urlPool); 
}

function randomYoutube() {
    return _.sample(youtubePool);
}

var mediaFakerMap = {
    link: randomUrl,
    image: faker.image.imageUrl,
    youtube: randomYoutube
}

function getMediaEntry() {
    var type = _.sample(MEDIA_TYPES);
    var url = mediaFakerMap[type]();
    return {
        type: type,
        url:url
    }
}

dbSeeder.seedIfEmpty(Media, getMediaEntry, 5);
