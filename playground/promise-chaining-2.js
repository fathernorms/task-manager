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

const deleteTaskAndCount = async (id, completed) => {
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({ completed })
    return count
}

deleteTaskAndCount("625acd1ea4c56b6024b3d592", false).then((count) => {
    console.log(count)
}).catch((err) => {
    console.log(err)
});
