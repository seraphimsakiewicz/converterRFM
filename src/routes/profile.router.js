const router = require('express').Router();
const { User } = require('../db/models');

router.get('/',(req, res)=>{
  res.render('profile')
});

router.get('/:id', (req, res)=>{
  res.render('profile')
});

router.put('/:id', async (req, res) => {
  let entry;

  try {
    entry = await User.update({ name: req.body.name, email: req.body.email, surname: req.body.surname, password: req.body.password },{where:{id: req.params.id}, returning: true, plain: true});
  } catch (error) {
    return res.json({ isUpdateSuccessful: false, errorMessage: 'Не удалось обновить запись в базе данных.' });
  }

  return res.redirect('/profile/:id');
});


module.exports = router;
