const express = require('express');
const router = express.Router();
const fs = require('fs');

router.post('/', (req, res, next) => {
    console.log(req.username);
    console.log(req.chat);
    res.redirect('/');
})

module.exports = router