const app = require('./config/app')
const port = 3030

const server = app.listen( port, () => {})

console.log(`Server listening on port: ${port}`)