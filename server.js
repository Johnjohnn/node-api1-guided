const http = require("http")                        // import the http request 

const server =  http.createServer((req, res ) =>{                 // build the server  
 res.statusCode = 200    // status code of 200 means "success "

 res.write("<h1>Hello, world</h1>")
})