const UserLogic = require('./BL/UserLogic')

module.exports = app => {
    app.post('/user', async (req, res) => {
        let result
        try {
            result = await UserLogic.create(req.body)
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }
        res.send(result)
    })

    app.post('/user/register', async (req, res) => {
        let result
        try {
            result = await UserLogic.register(req.body)
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }
        res.send(result)
    })

    app.get('/user/login', async (req, res) => {
        let result
        try {
            const { email, password } = req.query
            result = await UserLogic.login(email, password)
        } catch (error) {
            result = {
                status: 400,
                message: error.message || error
            }
        }
        res.send(result)
    })

    app.get('/user', async (req, res) => {
        res.send(await UserLogic.read())
    })

    app.put('/user', async (req, res) => {
        res.send(await UserLogic.update(req.body))
    })
}
