const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const loginRoute = require('./routes/login')
const fs = require('fs');

app.use(bodyParser.urlencoded({extended:false}));

app.use(loginRoute);

app.post('/', (req, res, next) => {
    const data = `${req.body.username}:${req.body.chat}`;
    fs.appendFile("chats.txt",data,(err)=>{
        if(err){
            console.log(err);
        }
        res.redirect('/');

    })
})

app.get('/',(req,res,next) =>{
    fs.readFile("chats.txt",(err,data)=>{
        if(err){
            console.log(err);
            data="No Chats Found";
        }
        res.send(`
        <html>
        <body>
        <form action="/" method="post" id="form">
            ${data}
            <br>
            <input type="text" name="chat" id="inp" placeholder="Enter your chat..."></input>
            <br>
            <input id="username" name="username" type="hidden"></input>
            <button type="submit">Send</button>
        </form>
        </body>
        <script>
            const form = document.getElementById("form");
            const un = document.getElementById("username");
            form.addEventListener("submit",()=>{
                un.value = localStorage.getItem("username");
            })
        </script>
        </html>
        `)
    })
    
})

app.listen(4000);