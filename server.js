const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = __dirname + '/app/views/';
const app = express();
app.use(express.static(path));
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const helper = require("./app/helper/helper");
const db = require("./app/models");
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

const Message = db.messages;

app.get('/', function (req,res) {
  res.sendFile(path + "index.html");
});

app.post('/api/add/message',function (req,res) {	
    const data = {};
    data.success=false;
    if (!req.body) {
      data.errorMessage="Data can not be empty";
      res.status(400).json(data);
    }
    if(!helper.validate(req.body)){
      data.errorMessage="Fields are Missing";
      res.status(400).json(data);
    }
    req.body.content = helper.encrypt_message(req.body.content,req.body.encryption_type);
    console.log(req.body.content);
		const message = new Message(req.body);
		message
    .save(message)
    .then(result => {
      if(!result){
        data.errorMessage="Not added";
        res.status(500).json(data);
      }else{
        data.success=true;
        res.status(200).json(data);
      }
    })
    .catch(err => {
      data.errorMessage=err;
      res.status(500).json(data);
    });
});

app.put('/api/edit/message',function(req,res){
  const data = {};
  data.success=false;
  if (!req.body) {
    data.errorMessage="Data can not be empty";
    res.status(400).json(data);
  }
  if(!helper.validate(req.body)){
    data.errorMessage="Fields are Missing";
    res.status(400).json(data);
  }
  req.body.content = helper.encrypt_message(req.body.content,req.body.encryption_type);
  console.log(req.body.content);
  const message = new Message(req.body);
  Message
  .findByIdAndUpdate(req.body.id, {'content':req.body.content,'encryption_type':req.body.encryption_type}, { useFindAndModify: false })
  .then(result => {
    if(!result){
      data.errorMessage="Not updated";
      res.status(500).json(data);
    }else{
      data.success=true;
      data.encrypted_message = req.body.content;
      res.status(200).json(data);
    }
  })
  .catch(err => {
    data.errorMessage=err;
    res.status(500).json(data);
  });
});

app.delete('/api/delete/message/:id',function(req,res){
  const id = req.params.id;
  const data = {};
  data.success=false;
  if (!id) {
    data.errorMessage="Id is required";
    res.status(400).json(data);
  }
  Message.findByIdAndRemove(id)
    .then(result => {
      if(!result){
        data.errorMessage="Not deleted";
        res.status(500).json(data);
      }else{
        data.success=true;
        res.status(200).json(data);
      }
    })
    .catch(err => {
      data.errorMessage=err;
      res.status(500).json(data);
    });
});

app.get('/api/message/:id',function(req,res){
  const id = req.params.id;
  const data = {};
  data.success=false;
  if (!id) {
    data.errorMessage="Id is required";
    res.status(400).json(data);
  }
  Message.findById(id)
    .then(result => {
      if(!result){
        data.errorMessage="Result not found";
        res.status(500).json(data);
      }else{
        data.success=true;
        data.message=result;
        data.decrypted_message = helper.decrypt_message(result.content,result.encryption_type);
        res.status(200).json(data);
      }
    })
    .catch(err => {
      data.errorMessage=err;
      res.status(500).json(data);
    });
});

app.get('/api/messages',function(req,res){
  const data = {};
  data.success=false;

  Message.find()
    .then(result => {
      if(!result){
        data.errorMessage="Result not found";
        res.status(500).json(data);
      }else{
        data.success=true;
        data.messages=result;
        res.status(200).json(data);
      }
    })
    .catch(err => {
      data.errorMessage=err;
      res.status(500).json(data);
    });
});

app.get('/api/delete/messages',function(req,res){
  const data = {};
  data.success=false;

  Message.deleteMany({})
    .then(result => {
      if(!result){
        data.errorMessage="Error in deletion";
        res.status(500).json(data);
      }else{
        data.success=true;
        data.successMessage="Deleted All";
        res.status(200).json(data);
      }
    })
    .catch(err => {
      data.errorMessage=err;
      res.status(500).json(data);
    });
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
