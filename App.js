const http = require('http')

const server = http.createServer((req, res) => {
        res.write("Get Well Soooon!")
        res.end()
    }
)

server.listen(8000)