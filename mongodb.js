// CRUD create read update delete

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }

    const db = client.db(databaseName)

    // db.collection("users").findOne(
    //     { _id: new ObjectID("62599b5f7bfef8f97f40378b") },
    //     (error, user) => {
    //         if (error) {
    //             return console.log("Unable to fetch");
    //         }
    //         console.log(user);
    //     }
    // );

    db.collection('tasks').find({completed: false}).toArray((error, tasks) => {
        console.log(tasks)
    })
})
