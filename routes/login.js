const express = require('express');
const router = express.Router();

router.get('/login', (req, res, next) => {
    res.send(`
    <html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>
    <form action="/" method="POST" id="form">
        <input type="text" name="username" id="un">
        </input>
        <br>
        <button id="btn" type="submit">Login</button>
    </form>
    
</body>
<script>
    const form = document.getElementById("form");
    const inp = document.getElementById("un");
    form.addEventListener('submit',(e)=>{
        
        console.log(inp.value)
        localStorage.setItem("username",inp.value)
    })
    
</script>
</html>
    `)
})

module.exports = router