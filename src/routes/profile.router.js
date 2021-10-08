const router = require('express').Router();
const { User,  Origin, Converter} = require('../db/models');


router.get('/', async (req, res)=>{
  let files;
  let id = req.params.id
  try{
    files = await Converter.findAll({

      include: [
        {
          model: Origin,
          where: {
            'userId': userId
          }
        }
      ]

    })
    console.log(files)
    return res.render('profile', { files })
  } catch (err){
    res.render('profile')
  }
});

// router.get('/edit',(req,res)=>{
//   res.render('edit')
// })


router.put('/edit', async (req, res) => {
  let entry;
  try { //, password: req.body.password
    entry = await User.update({ name: req.body.name, email: req.body.email, surname: req.body.surname },{where:{id: req.params.id}, returning: true, plain: true});
  } catch (error) {
    // console.log(error);
    return res.json({ isUpdateSuccessful: false, errorMessage: 'Не удалось обновить запись в базе данных.' });
  }

  return res.sendStatus(200);
});


module.exports = router;
