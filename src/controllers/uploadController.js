const Upload = require('../models/Upload');
const fs = require('fs');
const path = require('path');

class UploadController {
	async create(req, res) {
		const { originalname: name, size, filename: key } = req.file;
		const upload = await Upload.create({
			name,
			size,
			key,
			url: ''
		});

		const objReturn = {
			upload,
			msg: 'Arquivo salvo com sucesso.'
		}

		res.status(201).json(objReturn);
	}

	async getAll(req, res) {
		const result = await Upload.find();

		if (!result) {
			res.json({
				msg: "Arquivo não encontrado."
			})
			return;
		}

		res.status(200).json(result);
	}

	async delete(req, res) {
		const id = req.params.id;

		const result = await Upload.findById(id);

		if (!result) {
			res.json({
				msg: "Arquivo não encontrado."
			})
			return;
		}

		const filePath = path.join(__dirname, '..', '..', 'tmp', 'uploads', result.key);

		fs.unlink(filePath, (err) => {
			return err;
		});

		const deletedFile = await Upload.findByIdAndDelete(id);

		const objReturn = {
			deletedFile,
			msg: 'Arquivo deletado com sucesso.'
		}

		res.status(200).json(objReturn);
	}
}

module.exports = UploadController;