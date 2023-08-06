const express = require('express');

const router = express.Router();

router.get('/', (req, res) =>{
    res.send('User List');
});


router.get('/new', (req, res) =>{
    res.send('New User List');
});


router.post('/', (req, res) =>{
    res.send('create user');
});


router.get('/:id', (req, res)=>{
    res.send(`Get user with ID ${req.params.id}`)
});



module.exports = router;
