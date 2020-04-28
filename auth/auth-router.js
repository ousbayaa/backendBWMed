const router = require('express').Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Users = require('../users/users-model');;
const secrets = require('../api/secrets');

router.post('/register', (req, res) => {
    let user = req.body;

    const rounds = process.env.HASH_ROUNDS || 14;

    const hash = bcrypt.hashSync(user.password, rounds);

    user.password = hash;

    Users.add(user).then(saved =>{
        res.status(200).json(saved);
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({ errorMessage: error.message});
    });
});