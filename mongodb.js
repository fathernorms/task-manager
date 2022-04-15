// CRUD create read update delete

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database.')
    }

    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name: 'fathernorms',
    //     age: 29
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user into database.')
    //     }

    //     console.log(result.insertedId)
    // })

    //  db.collection('users').insertMany([
    //      {
    //          name: 'user1',
    //          age: 22
    //      }, {
    //          name: 'user2',
    //          age: 23
    //      }
    //  ], (error, result) => {
    //      if (error) {
    //          return console.log('Unable to insert user into database')
    //      }
    //      console.log(result.insertedIds)
    //  })

    db.collection('tasks').insertMany([
        {
            description: 'First Task',
            completed: true,
        }, {
            description: 'Second Task',
            completed: false,
        }, {
            description: 'Work on Task App',
            completed: false,
        }
    ], (error, result) => {
        if (error) {
            return console.log('Unable to insert tasks into tasks collection.')
        }
        console.log(result.acknowledged)
    })
})
