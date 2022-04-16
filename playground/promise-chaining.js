require('../src/db/mongoose')
const User = require('../src/models/user')


// 625acc445aa648eb51842b0c

User.findByIdAndUpdate("625acc445aa648eb51842b0c", {
    age: 1
}).then((user) => {
    console.log(user)
    return User.countDocuments({ age: 0 })
}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});
