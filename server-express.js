 // this is pulling node modules rather then th enode stdlib  
 const express = require("express")                                    // this imports express 
 const db =require("./database")
 const server =  express()           // this creates a server with express 
// some middleware that helps express parse incoming request bodies into a json object 
server.use(express.json())

    server.get("/", (req, res =>{
        res.json({ message: "Hello, world"})
    }))
    server.get("/users", (req, res =>{
        const users = db.getUsers()
        res.json(users)
    }))

    server.get("/users/:id", (req, res =>{
        // the param variable matches up to the name of our URL param above 
        const id = req.params.id
        const user = db.getUserById(id)

        res.json(user)

        if (user){
            res.json(user)
        }else {
            res.statusCode(404).json({
                message:"User not Found",
            })
        }
    }))


   // CREATE END POINT 
   server.post("/users"),(req , res =>{
       if(!req.body.name){
           return status(400).json({
               message:"Need a user name"
           })
       }
   const newUser =db.createUser({
       name: req.body.name,
   })
   res.json(newUser)

   })
   // UPDATE USER 
   server.put("/users/:id", (req, res) =>{
       // make sure the user exists before trying to update it 
       const user = db.getUserById(req/params/id)
       if(user){
           // user exists, continue with updating it 
           const updatedUser = db.updateUser(user.id, {
               // be specific with the values being updated,
               // rather than passing req.body directly 
               name: req.body.name || user.name,
           })
        }
   })

   server.delete("/user/:id", (req,res)=>{
       //make sure the user exists before trying to delete it 
       const user = db.getUserById(req.params.id)

       
   })
    server.listen(8080, () =>{

    console.log("server started at http://localhost:8080")
})