const express = require('express')
const router = express.Router()
const imageCtrl = require('../controllers/images')

// Loading in our new middleware

const { uploadImage } = require('../middlewares')

// Added our uploadImage middleware to our create route

router.post('/', imageCtrl.create, uploadImage)

// Added our uploadImage middleware to our update route

router.post('/:id', imageCtrl.update, uploadImage)


router.delete('/:id', imageCtrl.remove)
router.get('/:id/delete', imageCtrl.remove)



router.get('/', imageCtrl.index)
router.get('/new', imageCtrl.form)
router.get('/:id', imageCtrl.show)
router.get('/:id/edit', imageCtrl.form)



module.exports = router