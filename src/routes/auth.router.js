const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

router.get('', (req,res)=>{
  res.render('auth')
});

router.post('/signup', async (req, res)=>{
  try{
    const {name, surname, email, password: pass} = req.body;
    const saltRounds = 10;
    const password = await bcrypt.hash(pass, saltRounds);
    const currUser = await User.create({name, surname, email, password})
    req.session.userId = currUser.id;
    req.session.userName = currUser.name;
    req.session.userEmail = currUser.email;
    req.session.userSurname = currUser.surname;
    res.redirect('/');
  } catch (err){
    res.sendStatus(500)
  }
});

router.post('/signin', async (req, res)=>{
  
})


module.exports = router;
