const Router = require('express')
const router = new Router()

router.post('/add/notes', async (req, res) => {
    try {
        // const {name, creation, category, content} = req.body
        const note  = {
            name: 1,
        }
        return res.json(note)
    } catch (error) {
        console.log(error)
        res.sendStatus(400);
        res.send({message: 'Server errors'})
    }
});

module.exports = router;