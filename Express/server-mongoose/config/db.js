const mongoose = require('mongoose')

// mongoose.connect('mongodb+srv://Divya:Ads7685@in-aws.lo02y.mongodb.net/max-store?retryWrites=true&w=majority&appName=In-AWS')
mongoose.connect('mongodb+srv://banukapravalika5:3436@in-aws.vhnrw.mongodb.net/max-store?retryWrites=true&w=majority&appName=In-AWS')
const connection = mongoose.connection;

connection.on('connected',() => (console.log("DB Connected")))
connection.on('error',(error) => (console.log("DB Error" + error)))

module.exports = mongoose

