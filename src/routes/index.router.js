const router = require('express').Router();
// const multer = require('multer');
const uploadMulter = require('../middlewares/uploadMulter')
const {Origin} = require('../db/models')

router.get('', (req,res)=>{
  res.render('index')
});

router.get('/about', (req, res)=>{
  res.render('about')
});

router.post('', uploadMulter.single('file'), async (req, res)=>{
const originFile = req.file;
const filePath = originFile.path;
const userId = req.session?.userId;
await Origin.create({path: filePath, userId: userId})
return res.redirect(`/profile/${userId}`)
})

module.exports = router;
