const router = require('express').Router();
const { User,  Origin, Converter} = require('../db/models');


router.get('/:id', async (req, res)=>{
  let files
  try{
    files = await Origin.findAll({order:[['id', 'DESC']], where: {'uderId': req.params.id}, attributes:['path']})
    res.render(`profile/${id}`, {files})
  } catch (err){
    res.render(`profile/${id}`)
  }
});

router.put('/:id', async (req, res) => {
  let entry;

  try {
    entry = await User.update({ name: req.body.name, email: req.body.email, surname: req.body.surname, password: req.body.password },{where:{id: req.params.id}, returning: true, plain: true});
  } catch (error) {
    return res.json({ isUpdateSuccessful: false, errorMessage: 'Не удалось обновить запись в базе данных.' });
  }

  return res.redirect(`profile/${id}`);
});


module.exports = router;
