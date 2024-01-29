const { Router } = require("express");
const multer = require('multer');
const multerConfig = require('./config/multer');
const UploadController = require('./controllers/uploadController')

const uploadController = new UploadController();

const router = Router();

router.post('/upload', multer(multerConfig).single("file"), (req, res) => {
	uploadController.create(req, res)
})

router.get('/uploads', (req, res) => {
	uploadController.getAll(req, res)
})

router.delete('/upload/:id', (req, res) => {
	uploadController.delete(req, res)
})

module.exports = router;