const express = require("express");
const app = express();
const Port = process.env.PORT || 8000

app.use(express.json({extended:false}));

const articleinfo = {
    "Learn":{
        comments:[]
    },
    "Learn-node":{
        comments:[]
    },
    "Learn-React":{
        comments:[]
    },
    
}

app.post("/api/articles/:name/add-comments",(req,res)=>{
        const {username,text} = req.body
        const articleName = req.params.name
        articleinfo[articleName].comments.push({username,text});
       res.status(200).send(articleinfo[articleName]);
});




app.listen(Port,()=>{
    console.log("server running");
})