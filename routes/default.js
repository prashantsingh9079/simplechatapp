const express = require('express');
const router = express.Router();

router.get('/',(req,res,next) =>{
    res.send(`
    <html>
    <body>
    <form action="/" method="post" id="form">
        <input type="text" name="chat" id="inp" placeholder="Enter your chat..."></input>
        <br>
        <input id="username" type="hidden"></input>
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

module.exports = router;