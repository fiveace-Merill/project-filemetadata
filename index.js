var express = require('express');
var cors = require('cors');
require('dotenv').config()
const multer = require('multer')
const upload = multer({dest: './uploads'})


var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
	let file = req.file
	res.json({ name: file.originalname, type: file.mimetype, size: file.size})
//	upload(req, res, function(err){
//		if(err instanceof multer.MulterError){
//			console.log(`${err} -> Multer Error`)
//		}else if(err){
//			console.log(`${err} -> Just Error`)
//		}
//		console.log(file)
//	})
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
