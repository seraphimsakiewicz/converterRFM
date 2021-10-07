const router = require('express').Router();
const multer = require('multer');
const upload = multer({dest: 'uploads/'})
const {Origin} = require('../db/models')

router.get('', (req,res)=>{
  res.render('index')
});

router.get('/about', (req, res)=>{
  res.render('about')
});

router.post('', upload.single('file'), async (req, res)=>{
const originFile = req.file;
const filePath = originFile.path;
await Origin.create({path: filePath, userId: userId})
return res.redirect(`/profile/${userId}`)
})

module.exports = router;
