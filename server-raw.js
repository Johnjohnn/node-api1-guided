const http = require("http")                        // import the http request 

const server =  http.createServer((req, res ) =>{                 // build the server  
 res.statusCode = 200    // status code of 200 means "success "

 res.setHeader("Content-Type", "text/html")
 res.write("<h1>Hello, world</h1>")
 // close it out and send the response back to the client 
 res.end()
})



// web servers need to be coninously listening for incoming request 
server.listen(8080, () =>{
    console.log("server started at http://localhost:8080")
})