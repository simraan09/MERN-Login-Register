const router = require('express').Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../model/user');

require('dotenv').config();

router.post('/register', (req,res) => {
    const today = new Date()
    
    const userData = {
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        password:req.body.password,
        date:today
    }

    User.findOne({email:req.body.email})
    .then(user =>{
        if(!user){
            bcrypt.hash(req.body.password, 10, (err, hash) =>{
                userData.password = hash
                User.create(userData)
                .then(user =>{
                    res.json({status: user.email+' registered!'})
                })
                .catch(e => res.send('Error: '+e))
            })
        }else{
            res.json({error:'User already exists'})
        }
    })
    .catch(e => res.send('Error: '+e))
});

router.post('/login',(req,res) =>{
    User.findOne({
        email:req.body.email
    })
    .then(user =>{
        if(user){
            if(bcrypt.compareSync(req.body.password,user.password)){
                const payLoad = {
                    _id:user._id,
                    firstName:user.firstName,
                    lastName:user.lastName,
                    email:user.email
                }
                let token = jwt.sign(payLoad, process.env.SECRET_KEY,{
                    expiresIn:1440
                });
                res.send(token);
            }else{
                res.json({error:'Password Wrong'});
            }
                
        }else{
            res.json({error:'Email not exists'});
        }
    })
    .catch(e => res.send('Error: '+e))
});

router.get('/profile', (req,res) =>{

    let decode = jwt.verify(req.header['authorization'], process.env.SECRET_KEY);

    User.findOne({
        _id:decode._id
    })
    .then(user =>{
        if(user) res.json(user);
        else res.json({error:'User not exists'});
    })
    .catch(e => res.send('Error: '+e))

});

module.exports = router;