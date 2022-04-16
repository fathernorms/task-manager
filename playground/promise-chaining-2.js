require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndRemove("625a60a23fc970183f26a998").then((task) => {
    console.log(task)
    return Task.countDocuments({ completed: false })
}).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
});
