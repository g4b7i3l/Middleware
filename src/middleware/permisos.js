let admin = ['Ada', 'Greta', 'Vim', 'Tim']

const permise = (req, res, next) => {
    if (admin.includes(req.query.user)) {
        next()
    } else {
        res.render('noPermise', {
            title: 'No tiene permisos'
        })
    }
}
module.exports = permise;