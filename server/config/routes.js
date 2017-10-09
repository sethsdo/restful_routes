const tasks = require('../controllers/tasks.js')

module.exports = function (app) {
    app.get('/', tasks.show)
    app.get('/show/:id', tasks.showId)
    app.get('/create/:title/:desc/:completed', tasks.create)
    app.get('/update/:id/:boolean', tasks.update)
    app.get('/delete/:id', tasks.remove)
}