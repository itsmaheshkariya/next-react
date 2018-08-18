const mongoose = require('mongoose');
const URI = 'mongodb://localhost:27017/posts';

mongoose.connect(URI,{ useNewUrlParser: true });
let db = mongoose.connection;
db.on('error',(err)=>{
    console.log(err);
});
db.once('open',()=>{
    console.log('Mlab connected successfully');
})

module.exports = mongoose;