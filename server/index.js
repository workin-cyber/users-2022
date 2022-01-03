require('dotenv').config({ path: 'server/.env' })
const
    express = require('express'),
    app = express(),
    PORT = process.env.PORT

app.use(express.static('build'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

require('./Router')(app)

app.listen(PORT, () => console.log(`Server is running. PORT: ${PORT}`))
