const router = require('express').Router();
// const multer = require('multer');
const uploadMulter = require('../middlewares/uploadMulter')
const path = require('path')
const { Origin } = require('../db/models')

router.get('', (req, res) => {
  res.render('index')
});

router.get('/about', (req, res) => {
  res.render('about')
});

router.post('', uploadMulter.single('file'), async (req, res) => {
  console.log('+___++++++++++++++)))))))))))))', req.file)
  try {
    const originFile = req.file;
    const fileName = originFile.filename;
    const filePath = path.join(process.env.PWD, `../uploadedFiles/${fileName}`)
    const userId = req.session?.userId;
    await Origin.create({ path: filePath, userId: userId })
    return res.sendStatus(200)
  } catch (err) {
    
    return res.sendStatus(500)
  }

})

module.exports = router;
