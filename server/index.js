const express = require('express');
const mogoose = require('mongoose');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(cors());

const user = require('./routes/user');
app.use('/user', user);

const url = 'mongodb://localhost:27017/mernloginregdb';

mogoose
.connect(url,{useUnifiedTopology:true, useNewUrlParser:true})
.then(() => console.log('MongoDB connected!'))
.catch(e => console.log('Error: '+e))

app.listen(PORT, () => console.log('Server running on port: '+PORT));