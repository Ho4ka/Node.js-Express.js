const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const mongoConnect = (callback) => {
    MongoClient.connect('mongodb+srv://Maks:763315Maks@cluster0-llm4m.mongodb.net/test?retryWrites=true&w=majority')
        .then(client => {
            console.log('Connected');
            callback(client);
        })
        .catch(error => console.log(error));
};

module.exports = mongoConnect;