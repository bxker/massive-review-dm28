function getUsers(req, res){
    const db = req.app.get('db')

    db.getUsers().then(response => {
        res.status(200).json(response)
    })
}

function addUsers(req, res){
    const db = req.app.get('db')
    const {username, fav_color} = req.body

    db.addUsers(username, fav_color).then(response => {
        res.status(200).json(response)
    })
}

function updateUsers(req, res){
    const db = req.app.get('db')
    const {username, fav_color} = req.body
    const user_id = +req.params.user_id

    db.updateUsers(username, fav_color, user_id).then(response => {
        res.status(200).json(response)
    })
}

function deleteUsers(req, res){
    const db = req.app.get('db')
    const user_id = +req.params.user_id

    db.deleteUsers(user_id).then(response => {
        res.status(200).json(response)
    })
}

module.exports = {
    getUsers,
    addUsers,
    updateUsers,
    deleteUsers
}